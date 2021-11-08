import React from 'react'
import "./navbar.scss"
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown, NotificationsNone } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                        alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon" />
                    <span>KID</span>
                    <NotificationsNone className="icon" />
                    <img src="data:image/jpeg;base64,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"
                        alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span> <NavLink to="/" className="tags">  Logout </NavLink> </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Navbar;
