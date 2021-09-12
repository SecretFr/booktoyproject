import React, { Component } from 'react';

import ProductDetailLeft from './ProductDetailLeft';
import ProductDetailRight from './ProductDetailRight';

export default function ProductTop({productId, productName, detail, unitPrice}) {

    return (
        
        <div className="shop-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <ProductDetailLeft />
                    <ProductDetailRight 
                        productId = {productId}
                        productName = {productName}
                        detail = {detail}
                        unitPrice = {unitPrice}/> 
                </div>
            </div>
        </div>

    );
}