import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SideMenu from './SideMenu';

export default function Nav(){

    return(
      
            <div className="container-fluid">
                <div className="row">
                    <Logo />
                    <Menu />
                  
                </div>
            </div>
    );
}