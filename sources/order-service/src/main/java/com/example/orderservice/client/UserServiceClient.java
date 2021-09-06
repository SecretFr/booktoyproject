package com.example.orderservice.client;


import com.example.orderservice.vo.ResponseCatalog;
import com.example.orderservice.vo.ResponseOrder;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@FeignClient(name = "user-service")
public interface UserServiceClient {
    @PutMapping("/users/{userId}/{totalPirce}")
    ResponseOrder updateUserWallet(@PathVariable String userId, @PathVariable int totalPirce);

}
