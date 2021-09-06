package com.example.cartservice.dto;

import lombok.Data;


import java.io.Serializable;
import java.util.Date;

@Data
public class CartDto implements Serializable {
    private Integer cart_no;
    private Integer id;
    private Integer product_id;
    private String product_name;
    private Integer unit_price;
    private String filename;
    private String user_id;
    private Date created_at;
    private Date deleted_at;
}
