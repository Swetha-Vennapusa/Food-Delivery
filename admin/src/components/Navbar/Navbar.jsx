import React from 'react';
import "./Navbar.css"
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='app-name'><i class="fa-solid fa-burger"></i>  QuickBite</div>
        <img className="profile" src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar;
