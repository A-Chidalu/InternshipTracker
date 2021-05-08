import React from 'react'
//import ham from '../hamburger.png'
import {Link} from 'react-router-dom';

const NavBar = ({ img }) => {
    const linkStyles = "block mr-2 font-inter font-bold cursor-pointer hover:text-red-400";
    return (
        <div className="flex justify-between w-3/4 content-center max-w-screen-xlg ml-auto mr-auto mt-2">
            <Link to="/" className="font-inter font-bold lg:text-3xl">Tracky</Link>
            <button className="lg:hidden">
                <img alt="A cool img" className="cursor-pointer" src={img} width="25" height="25" />
            </button>
            <div className="hidden lg:flex lg:items-center lg:justify-between">
                <nav>
                    <ul className="lg:flex items-center justify-between">
                        <li>
                            <Link to="/login" className={linkStyles}>Login</Link>
                        </li>
                        <li>
                            <Link to="/signup" className={linkStyles}>Sign up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
