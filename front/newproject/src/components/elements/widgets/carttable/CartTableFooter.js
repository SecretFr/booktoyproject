import React, { Component } from 'react';

export default function CartTableFooter() {
    return(
        <div className="row">
            <div className="col-lg-4 col-md-6">
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
                            <button className="cart-btn-2" type="submit">Get A Quote</button>
                        </div>
                    </div>
                </div>
            </div>
       
            <div className="col-lg-4 col-md-12">
                <div className="grand-totall">
                    <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                    </div>
                    <h5>Total products <span>$73.13</span></h5>
                    <h4 className="grand-totall-title">Grand Total <span>$73.13</span></h4>
                    <a href="/payment">결제하기</a>
                </div>
            </div>

        </div>
    );
}