import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';


export default function PaymentMethod() {

    return (
        <div>

            <div className="tax-wrapper ">
                <div className="tax-select-wrapper">

                    <br />
                    <div class="row justify-content-md-center">
                    <div className=" col-md-6">
                        <div className="cart-tax">
                            <div className="title-wrap">
                                <h4 className="cart-bottom-title section-bg-gray">결제수단</h4>
                            </div>
                            <div className="tax-wrapper">
                                <div className="tax-select-wrapper">


                                    <div class="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"></input>
                                        <label className="form-check-label" for="exampleRadios1">
                                            카드 결제
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                        <label className="form-check-label" for="exampleRadios2">
                                            무통장 입금(가상계좌)
                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"></input>
                                        <label className="form-check-label" for="exampleRadios3">
                                            포인트 결제
                                        </label>
                                    </div>
                                    <br />
                                    

                                    <a href="/finished">
                                    <button className="cart-btn-2" type="submit">결제완료</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <br />

        </div>
    );
}