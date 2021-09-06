import { Fragment } from "react";
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import MyAccountForm from "./MyAccountForm";
import React, { Component } from 'react';


export default function MyAccount() {

    return(
        <Fragment>
            <Header />
            <Bread productName = "My Account"/>
            <MyAccountForm />
            <Footer />
        </Fragment>
    );
}