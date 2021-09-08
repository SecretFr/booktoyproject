import React, { Component } from 'react';

export default function Delivery() {
    return (
        <div>

            <div className="tax-wrapper ">
                <div className="tax-select-wrapper">
                    <br />
                    <br />
                    <div class="row justify-content-md-center">
                        <div className=" col-md-6">
                            <div className="cart-tax">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gray">배송지 입력</h4>
                                </div>
                                <div className="tax-wrapper">
                                    <div className="tax-select-wrapper">

                                        <div className="tax-select">
                                            <label>* 받는 사람</label>
                                            <input type="text" />
                                        </div>
                                        <div className="tax-select">
                                            <label>* 주소1</label>
                                            <input type="text" />
                                        </div>
                                        <div className="tax-select">
                                            <label>* 주소2</label>
                                            <input type="text" />
                                        </div>
                                        <div className="tax-select">
                                            <label> 주소3</label>
                                            <input type="text" />
                                        </div>
                                        <div className="tax-select">
                                            <label>* 우편번호</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}