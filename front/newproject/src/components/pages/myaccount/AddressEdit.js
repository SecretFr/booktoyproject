import React, { Component } from 'react';


export default function AddressEdit(props){

    return(
        <div className="card-body">
            <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    <h4>Address Book Entries</h4>
                </div>
                <div className="entries-wrapper">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="entries-info text-center">
                                <p>EMAIL: {props.email}</p>
                                <p>ZIPCODE: {props.zipcode}</p>
                                <p>ADDRESS: {props.address1}</p>
                                <p>ADDRESS INFO: {props.address2}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                            <div className="entries-edit-delete text-center">
                                <button className="edit">Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="billing-back-btn">
                    <div className="billing-btn">
                        <button type="submit">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}