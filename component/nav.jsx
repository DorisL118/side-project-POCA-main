import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './nav.css'; // 引入 CSS 文件

<head>
<meta charset='utf-8' />
    <title>map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charset="UTF-8"/>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.0/redux.min.js"
            integrity="sha512-1/8Tj23BRrWnKZXeBruk6wTnsMJbi/lJsk9bsRgVwb6j5q39n0A00gFjbCTaDo5l5XrPVv4DZXftrJExhRF/Ug=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
            crossorigin="anonymous"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./nav.css"/>

</head>

const Nav = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleClick = () => {
        setShowOverlay(!showOverlay); // 點擊時切換 showOverlay 的狀態
    }

    const handleHomeClick = () => {
        setShowOverlay(false); // 點擊 Home 時隱藏 showOverlay
    }

    return (
        <>
            <div className={`overlay ${showOverlay ? 'show-overlay' : ''}`}>
                <div className="find"><p>找咖啡 | Cafe ❯</p></div>
                <div className="buy"><p>買咖啡 | Online Shop ❯</p></div>
                <div className="map"><p>店家地圖 | Cafe Map ❯</p></div>
                <div className="contact"><p>聯絡我們 | Contact Us ❯</p></div>
                <div className="home" onClick={handleHomeClick}><p>返回 | Home ❯</p></div>
            </div>
            <div className="container">
                <div className="row row-cols-2 mt-3">
                    <div className="row-col-2">
                        <img src="../logo/@1x/Header-LOGO.svg" alt="#" />
                    </div>
                    <div className="row-col-2">
                        <ul className="nav justify-content-end">
                            <li className="nav-item-1">
                                <img src="../icon/@1x/ShoppingCart.svg" className="nav-link-shop" href="#"></img>
                            </li>
                            <li className="nav-item-2" onClick={handleClick}>
                                <img src="../icon/@1x/menu.svg" className="nav-link-more" href="#"></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Nav />);
