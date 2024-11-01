import React from 'react'
import "./Header.scss"
import logo from "../../assets/logo.svg"
import { NAVBAR_DATA } from '../../static'
import { MdMenu } from "react-icons/md";

const Header = () => {
    const DATA = NAVBAR_DATA?.map((item, inx) => <li key={inx}><a href="#" key={inx}>{item}</a></li>)
  return (
    <header className='header'>
        <div className="container">
            <nav className='navbar'>
                <ul className="collection">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    {DATA}
                </ul>
                <button>Booking Now</button>
                <MdMenu className='menu'/>
            </nav>
        </div>
    </header>
  )
}

export default Header