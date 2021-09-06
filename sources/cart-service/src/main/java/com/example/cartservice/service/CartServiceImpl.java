package com.example.cartservice.service;

import com.example.cartservice.dto.CartDto;
import com.example.cartservice.jpa.CartEntity;
import com.example.cartservice.jpa.CartRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CartServiceImpl implements CartService{
    CartRepository cartRepository;
    Environment env;

    @Autowired
    public CartServiceImpl(CartRepository cartRepository,
                           Environment env){
        this.cartRepository = cartRepository;
        this.env = env;
    }


    @Override
    public String deleteCart(String productId) {
        CartEntity cartEntity = cartRepository.findByUserId(productId);
        if(cartEntity == null){
            try{
                throw new Exception();
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }
        cartRepository.delete(cartEntity);
        String result = "Delete OK!";
        return result;
    }

    @Override
    public CartDto getUserByUserId(String userId) {
        CartEntity cartEntity = cartRepository.findByUserId(userId);
        CartDto cartDto = new ModelMapper().map(cartEntity, CartDto.class);
        return cartDto;
    }

    @Override
    public CartEntity getCart(String userId) {
        return cartRepository.findByUserId(userId);
    }

    @Override
    public Iterable<CartEntity> getAllCarts() {
        return cartRepository.findAll();
    }

}
