package com.example.orderservice.controller;

import com.example.orderservice.client.CatalogServiceClient;
import com.example.orderservice.client.UserServiceClient;
import com.example.orderservice.dto.OrderDto;
import com.example.orderservice.jpa.OrderEntity;
import com.example.orderservice.kafkadto.KafkaOrderDto;
import com.example.orderservice.mq.KafkaProducer;
import com.example.orderservice.mq.OrderProducer;
import com.example.orderservice.service.OrderService;
import com.example.orderservice.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@RestController
@RequestMapping("/")
@Slf4j
public class OrderController {
    private Environment env;
    OrderService orderService;
    KafkaProducer kafkaProducer;
    UserServiceClient userServiceClient;
    CatalogServiceClient catalogServiceClient;
    OrderProducer orderProducer;

    @Autowired
    public OrderController(Environment env, OrderService orderService, KafkaProducer kafkaProducer,
                           CatalogServiceClient catalogServiceClient,
                           OrderProducer orderProducer,
                           UserServiceClient userServiceClient) {
        this.env = env;
        this.orderService = orderService;
        this.kafkaProducer = kafkaProducer;
        this.userServiceClient = userServiceClient;
        this.catalogServiceClient = catalogServiceClient;
        this.orderProducer = orderProducer;
    }

    @GetMapping("/health_check")
    public String status() {
        return String.format("It's Working in Order Service on PORT %s",
                env.getProperty("local.server.port"));
    }

    //주문하기
    @PostMapping("/{userId}/orders")
    public ResponseEntity<ResponseOrder> createOrder(@PathVariable("userId") String userId,
                                                     @RequestBody RequestOrder orderDetails) {
        log.info("Before add orders data");


        //check how much stock is left
        //order-service -> catalog-service
        //resttemplate or openfeign
        boolean isAvailable = true;

        ResponseCatalog responseCatalog = catalogServiceClient.getCatalog(orderDetails.getProductId());
        ResponseUser responseUser = userServiceClient.getUser(userId);

        if((responseCatalog != null &&
            responseCatalog.getQty() - orderDetails.getQty() < 0) || responseUser.getWallet() <= 0){
            isAvailable = false;
        }

        if(isAvailable){
            ModelMapper mapper = new ModelMapper();
            mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

            OrderDto orderDto = mapper.map(orderDetails, OrderDto.class);
            /*feign client로 유저 서비스에서 유저 정보 가져오기*/
            orderDto.setId(responseUser.getId());
            orderDto.setUserId(userId);
            orderDto.setEmail(responseUser.getEmail());
            orderDto.setName(responseUser.getName());
            orderDto.setProductName(responseCatalog.getProductName());
            orderDto.setZipcode(responseUser.getZipcode());
            orderDto.setAddress1(responseUser.getAddress1());
            orderDto.setAddress2(responseUser.getAddress2());
            /*jpa*/
            OrderDto createdOrder = orderService.createOrder(orderDto, userId);
//            ResponseOrder responseOrder1 = mapper.map(createdOrder, ResponseOrder.class);
            /*kafka*/
//            orderDto.setOrderId(UUID.randomUUID().toString());
//            orderDto.setTotalPrice(orderDetails.getQty() * orderDetails.getUnitPrice());
            ResponseOrder responseOrder = mapper.map(createdOrder, ResponseOrder.class);
//            log.info(orderDto.getInstanceId());
            kafkaProducer.send("exam-catalog-topic", createdOrder);
//            orderProducer.send("demo_topic_orders", orderDto);

            log.info("After added orders data");
            return ResponseEntity.status(HttpStatus.CREATED).body(responseOrder);
        }
        else{
            log.info("After added orders data");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }


    }

    @GetMapping("/{userId}/orders")
    public ResponseEntity<List<ResponseOrder>> getOrder(@PathVariable("userId") String userId) throws Exception {
        log.info("Before retrieve orders data");
        Iterable<OrderEntity> orderList = orderService.getOrderByUserId(userId);

        List<ResponseOrder> result = new ArrayList<>();
        orderList.forEach(v -> {
            result.add(new ModelMapper().map(v, ResponseOrder.class));
        });

        /* 오류 발생 테스트 코드 */
//        Random rnd = new Random(System.currentTimeMillis());
//        int time = rnd.nextInt(3);
//        if(time % 2 == 0) {
//            try {
//                Thread.sleep(10000);
//                throw new Exception();
//            } catch (InterruptedException ex) {
//                log.warn(ex.getMessage());
//            }
//        }
        log.info("After retrieve orders data");

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    @PutMapping("/orders/{orderId}/{id}")
    public ResponseEntity<ResponseOrder> updateOrder(@PathVariable("orderId") String orderId, @PathVariable("id") Long id,
                                                     @RequestBody RequestUpdateOrder orderDetails){
        ModelMapper mapper = new ModelMapper();
        mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        OrderDto orderDto = mapper.map(orderDetails, OrderDto.class);
        orderDto.setOrderId(orderId);
        orderDto = orderService.updateOrder(orderDto, id);

        ResponseOrder responseOrder = mapper.map(orderDto, ResponseOrder.class);
        orderProducer.send("demo_topic_orders", orderDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(responseOrder);
    }


}