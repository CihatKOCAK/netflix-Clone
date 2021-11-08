import React from 'react'
import { NavLink } from 'react-router-dom'
import "./notfound.scss"

export default function Notfound() {
    return (
        <div>
            <div className="notfound">
                <div className="top">
                    <div className="wrapper">
                        <img
                            className="logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="container">
                    <h1>Are you lost?.</h1>
                    <h2>Sorry, we couldn't find the page you were looking for. But there is a lot of content you can explore on the homepage.</h2>
                    <div className="buttonS">
                        <button className="homepageButton">
                          <NavLink className="tags" to = "/">  Netflix Homepage </NavLink>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
