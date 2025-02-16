import React, { useState } from "react";
import './navstyle.css'
import { Link, useNavigate } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

function Navbar() {
    const [open, setopen] = useState(false);
    const handleclick = () => setopen(!open);
    const closemenu = () => setopen(false);
    const navigate= useNavigate();
    return (
        <nav className="navbar">
            <div className="logo-textarea">
                <div className="logo">
                    <Link to='/Home' className="nav-logo">Petsconnect</Link>
                </div>
               {/* <div className="textarea">
                    <input type="text" placeholder="Search....." />
                    <div className="search">
                        <FaSearch />
                    </div>
                </div>*/}
                <div className="icons" onClick={handleclick}>
                    {open ? <GrClose /> : <HiOutlineMenuAlt2 />}
                </div>
            </div>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <Link to='/about' className="link"><li onClick={closemenu}>About</li></Link>
                <Link to='/pet' className="link"><li onClick={closemenu}>Pet</li></Link>
                <Link to='/petaccessories' className="link"><li onClick={closemenu}>Petaccessories</li></Link>
                <button className="innerlinks" onClick={()=>navigate('/cart')}><IoIosCart className="cart-icon"/></button>
            </ul>
        </nav>
    )
}

export default Navbar;
      