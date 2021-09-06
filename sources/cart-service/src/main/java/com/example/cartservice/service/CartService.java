package com.example.cartservice.service;

import com.example.cartservice.dto.CartDto;
import com.example.cartservice.jpa.CartEntity;

public interface CartService {
    Iterable<CartEntity> getAllCarts();
    String deleteCart(String productId);
    CartDto getUserByUserId(String userId);
    CartEntity getCart(String userId);
}
