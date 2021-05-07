import React from 'react'
//import ham from '../hamburger.png'
import {Link} from 'react-router-dom';

const NavBar = ({ img }) => {
    const linkStyles = "block mr-2 font-inter font-bold cursor-pointer hover:text-red-400";
    return (
        <div className="flex justify-between w-3/4 content-center max-w-screen-xlg ml-auto mr-auto mt-2">
            <p className="font-inter font-bold lg:text-3xl">Tracky</p>
            <button className="lg:hidden">
                <img alt="A cool img" className="cursor-pointer" src={img} width="25" height="25" />
            </button>
            <div className="hidden lg:flex lg:items-center lg:justify-between">
                <nav>
                    <ul className="lg:flex items-center justify-between">
                        <li>
                            <a href="#" className={linkStyles}>Login</a>
                        </li>
                        <li>
                            <a href="#" className={linkStyles}>Sign up</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
