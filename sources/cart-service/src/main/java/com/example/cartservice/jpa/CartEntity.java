package com.example.cartservice.jpa;


import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="carts")
public class CartEntity implements Serializable {
    @Id
    @GeneratedValue
    private Integer cart_no;

    @Column(nullable = true)
    private Integer id;


    @Column(nullable = true)
    private Integer product_id;

    @Column(nullable = false)
    private String product_name;

    @Column(nullable = false)
    private String unit_price;

    @Column(nullable = true)
    private String filename;

    @Column(nullable = false)
    private String user_id;

    @Column(nullable = false, insertable = false, updatable = false)
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private Date created_at;

    @Column
    @ColumnDefault(value="CURRENT_TIMESTAMP")
    private Date deleted_at;




}
