import React from 'react';
import { NavLink, Link } from "react-router-dom"
import './Navbar.css'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const gadgets = useSelector((state) => state.gadgetReducer.gadgets)

    return (
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'><img className='nav-img' src="https://dcassetcdn.com/design_img/247175/75672/75672_2881220_247175_image.jpg" alt="" /></Link>
                <div>

                    <Link to='/show-gadget'>
                        <button type="button" className="btn btn-primary position-relative">
                            Cart
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {gadgets.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <NavLink to='/' className='tab'>Home</NavLink>
                    <NavLink to='/show-gadget' className='tab'>Your Gadget</NavLink>
                    <NavLink to='/' className='tab'>About Us</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;