import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';


export default function PaymentMethod() {

    return(
    <div>
        <h1>-------------------------결제하기-------------------------------------------------------------------</h1>
        <div className="tax-wrapper">
                        <div className="tax-select-wrapper">

                        <div className="tax-select">
                                <label>결제수단</label>
                                <input type="text" />
                            </div>
                           
                            <button className="cart-btn-2" type="submit">결제하기</button>
                        </div>
                    </div>
    </div>
    );
}