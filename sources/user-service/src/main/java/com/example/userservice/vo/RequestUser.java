package com.example.userservice.vo;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class RequestUser {
    @NotNull(message = "Email cannot be null")
    @Size(min = 2, message = "Email cannot be less than two characters")
    @Email
    private String email;

    @NotNull(message = "Password cannot be null")
    @Size(min = 2, message = "Password not be less than two characters")
    private String password;

    @NotNull(message = "Name cannot be null")
    @Size(min = 2, message = "Name not be less than two characters")
    private String name;

    @Size(min = 2, message = "Zipcode not be less than one characters")
    private String zipcode;
    @Size(min = 2, message = "Address not be less than one characters")
    private String address1;
    @Size(min = 2, message = "Address detail not be less than one characters")
    private String address2;

}