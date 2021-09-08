import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function NavComponent() {

    const [menuData, setmenuData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/menu")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setmenuData(data);
            })
            .catch(error => console.log(error))
    }, []);
    // 함수 한번만 수행해

    const menuList = menuData.map(item => {
        if (item.children) {
            return (
                <li key={item.id} className="px-4">
                    <Link to={item.url}>{item.name}<i className="fa fa-angle-down"></i></Link>
                    <ul className="mega-menu">
                        <li>
                            <ul>
                                {item.children.map(subitem => (
                                    <li key={subitem.id}><Link to={subitem.url}>{subitem.name}</Link></li>
                                ))}
                            </ul>
                        </li>


                    </ul>
                </li>
            );
        } else {
            return (
                <li key={item.id} className="px-4"><Link to={item.url}>{item.name}</Link></li>
            );
        }
        //  key={item.id} className="Nav-link"><a href={item.url} className="nav-link">{item.name}</a></li>
    });

    return (

        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <div className=" main-menu ">
                <nav>
                    <ul>

                 {menuList}

                    </ul>

                </nav>
            </div>
        </div>
    );
}