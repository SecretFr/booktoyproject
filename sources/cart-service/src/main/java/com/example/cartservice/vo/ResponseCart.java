package com.example.cartservice.vo;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseCart {
    private Integer cart_no;
    private Integer id;
    private Integer product_id;
    private String product_name;
    private Integer unit_price;
    private String user_id;
}
