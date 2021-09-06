import React, { Component } from 'react';


export default function HeaderTop(){
    return (
        <div className="header-padding-1 d-none d-lg-block header-top-area">
            <div className="container-fluid">
                <div className="header-top-wap">
                    <div className="language-currency-wrap">
                        <div className="same-language-currency language-style">
                            <span>English <i className="fa fa-angle-down"></i></span>
                            <div className="lang-car-dropdown">
                                <ul>
                                    <li><button value="en">English</button></li>
                                    <li><button value="fn">French</button></li>
                                    <li><button value="de">Germany</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="same-language-currency use-style">
                            <span>GBP <i className="fa fa-angle-down"></i></span>
                            <div className="lang-car-dropdown">
                                <ul>
                                    <li><button value="USD">USD</button></li>
                                    <li><button value="EUR">EUR</button></li>
                                    <li><button value="GBP">GBP</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-offer">
                        <p>Free delivery on order over <span>£0.00</span></p>
                    </div>
                    </div>

                    
                <div>  
                    <ul>
            <a href="/signup">
            <button type="button" class="btn btn-outline-success">SIGN UP</button>
            </a>
         

            <a href="/login">
            <button type="button" class="btn btn-outline-success">LOGIN</button>
            </a>
            </ul>
           </div>  
        


                </div>
            </div>
        </div>
    );
}