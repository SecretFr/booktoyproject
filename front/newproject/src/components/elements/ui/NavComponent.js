import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function NavComponent() {

    const [cateData, setCateData] = useState([]);
    const [categoryNo, setCategoryNo] = useState();
    const [cateUrl, setCateUrl] = useState();

    useEffect(() => {
        axios.get("/catalog-service/categories")
        .then(data => {
            setCateData(data.data)
            console.log(data.data)
        })
        .catch(error => console.log(error))
    }, []);
    // 함수 한번만 수행해
    if(cateData.cateNo === 1){
        
    }
    return (

        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <div className=" main-menu ">
                <nav>
                    <li>
                        <ul>
                            <li className="px-4"><a href="/">Home</a></li>                            
                            <li className="px-4">
                                <Link to="/productlist">Category<i className="fa fa-angle-down"></i></Link>
                                <ul className="mega-menu">
                                    <li>
                                        <ul>
                                            {
                                                cateData.map(item => (
                                                    <li key={item.cateNo}>
                                                        {item.cateNo === 1 &&
                                                        <Link to={`${item.url}/${item.cateNo}`}>
                                                            {item.cateName}
                                                        </Link>
                                                        }
                                                        {item.cateNo === 2 &&
                                                        <Link to={`${item.url}/${item.cateNo}`}>
                                                            {item.cateName}
                                                        </Link>
                                                        }
                                                        {item.cateNo === 3 &&
                                                        <Link to={`${item.url}/${item.cateNo}`}>
                                                            {item.cateName}
                                                        </Link>
                                                        }
                                                        {item.cateNo === 4 &&
                                                        <Link to={`${item.url}/${item.cateNo}`}>
                                                            {item.cateName}
                                                        </Link>
                                                        }
                                                        {item.cateNo === 5 &&
                                                        <Link to={`${item.url}/${item.cateNo}`}>
                                                            {item.cateName}
                                                        </Link>
                                                        }
                                                        {item.cateNo === 6 &&
                                                        <Link to={`${item.url}/${item.cateNo}`}>
                                                            {item.cateName}
                                                        </Link>
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </ul>                       
                            </li>
                            <li className="px-4"><Link to="/wishlist">WishList</Link></li>
                            <li className="px-4"><Link to="/myaccount">MyAccount</Link></li>
                            {/* {menuList} */}
                        </ul>
                    </li>
                </nav>
            </div>
        </div>
    );
}