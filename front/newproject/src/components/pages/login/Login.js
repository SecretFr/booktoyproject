
import React, { Component } from 'react';
import Logo from "../../elements/ui/Logo"

export default function Login() {
    return(
        <div>
        <div id="login">
<br/>  
<br/>       

 <div class="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">

                        <div class="d-flex justify-content-center">
                        <Logo />
                        </div>

                        <br/>

                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">Username:</label><br/>
                                <input type="text" name="username" id="username" className="form-control"></input>
                            </div>
                            <div class="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control"></input>
                            </div>
                            <div class="form-group">
                                {/* <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"></input></span></label><br/> */}
                                <a href="/" class="text-info">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="Submit"></input></a>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="/signup" className="text-info">Sign up here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    );
}
