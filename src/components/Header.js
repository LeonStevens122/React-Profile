// JavaScript source code

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ReactDOM from 'react-dom';

function Header() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper  purple darken-4">
                    <a href="#!" className="brand-logo  purple darken-4">   Leon Stevens Profile</a>
                    <ul className="right">
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        
                        <li className="active">
                            <Link to="/Projects">Portfolio</Link>
                        </li>
                        <li className="active">
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        );
}

export default Header;

