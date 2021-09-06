package com.example.cartservice.controller;

import com.example.cartservice.dto.CartDto;
import com.example.cartservice.jpa.CartEntity;
import com.example.cartservice.service.CartService;
import com.example.cartservice.vo.ResponseCart;
import com.example.cartservice.vo.ResponseUser;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@Slf4j
public class CartController {
    private Environment env;
    CartService cartService;


    @Autowired
    public CartController(Environment env, CartService cartService)
    {
        this.env = env;
        this.cartService = cartService;
    }

    //전체 장바구니 조회
    @GetMapping("/carts/{userId}")
    public ResponseEntity<ResponseCart> getCart(@PathVariable("userId") String userId){

        CartEntity cartEntity = cartService.getCart(userId);

       if ( cartEntity != null) {
           return ResponseEntity.status(HttpStatus.OK).body(
                   new ModelMapper().map(cartEntity, ResponseCart.class));

       } else {
           return new ResponseEntity(HttpStatus.NOT_FOUND);
       }

    }



    //장바구니 삭제
    @DeleteMapping("/carts/{productId}")
    public ResponseEntity<String> deleteCart(@PathVariable("productId") String productId){

        String result;
        result = cartService.deleteCart(productId);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
