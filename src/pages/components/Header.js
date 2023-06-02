import '../css_pages/Header.css'
import { Link } from "react-router-dom"
import Button from './Button'
// import React, { useState } from 'react';


function Header(){
    // <img src="./webImage/Logo_gradient.png" className='header_logo' alt='web logo'/>
    return <header id="header">
        <Link to="/" className='header_link-logo'>Agri Mate</Link>
        <div className='header_nav'>
            <ul className='header_navbar_nav'>
                {navbar.map((value, index)=>{
                    return <li key = {index} className='header_navbar_item'>
                                <a href={value.link}>{value.name}</a>
                           </li>
                })}
                <li className='header_navbar_item'>
                                <Link to='/IntroducePage'>giới thiệu</Link>
                </li>
            </ul>
        </div>
        <Button to ='/LoginPage' text='ĐĂNG NHẬP' iden='header_nav_login'/>
    </header>
}

const navbar = [
    {link:"/", name: "TRANG CHỦ"},
    {link:"#content", name: "DANH MỤC"},
]


export default Header