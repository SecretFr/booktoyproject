package com.example.catalogservice.mq;

import com.example.catalogservice.entity.CatalogEntity;
import com.example.catalogservice.jpa.CatalogRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class KafkaConsumer {
    CatalogRepository repository;

    @Autowired
    public KafkaConsumer(CatalogRepository repository) {
        this.repository = repository;
    }

    @KafkaListener(topics = "exam-catalog-topic")
    public void updateQty(String kafkaMessage){
        log.info("Kafka Message: -------->"+kafkaMessage);

        Map<Object, Object> map = new HashMap<>();
        ObjectMapper mapper = new ObjectMapper();

        try{
            map = mapper.readValue(kafkaMessage, new TypeReference<Map<Object, Object>>() {});
        }
        catch (JsonProcessingException e){
            e.printStackTrace();
        }

        //수량 업데이트
        CatalogEntity entity = repository.findByProductName((String) map.get("productName"));
        if(entity != null){
            entity.setQty(entity.getQty() - (Integer)map.get("qty"));
            repository.save(entity);
        }
    }
}