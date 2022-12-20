import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import { BsFillGridFill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
const Navbar = () => {
    const [MobileMenu, SetMobileMenu] = useState(false)
    return (
        <>
            <header className='header'>
                <div className="container d_flex" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="categories d_flex" style={{ display: "flex", justifyContent: "space-between" }}>
                        <span className="fa-solid fa-border-all"><BsFillGridFill /></span>
                        <h4>
                            Categories <i className='fa fa-chevron-down'></i>
                        </h4>
                    </div>
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => SetMobileMenu(false)}>
                            <li>
                                <Link to='/'>home</Link>
                            </li>
                            <li>
                                <Link to='/pages'>Pages</Link>
                            </li>
                            <li>
                                <Link to='/user'>User Account</Link>
                            </li>
                            <li>
                                <Link to='/vendor'>Vendor Account</Link>
                            </li>
                            <li>
                                <Link to='/track'>track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                        </ul>
                        <button className='toggle' onClick={() => SetMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <AiOutlineClose className="close home-btn" /> : <FaBars className="open" />
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar