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
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper blue lighten-3">
                    <a href="#!" class="brand-logo blue lighten-3">Leon Stevens Profile</a>
                    <ul class="right">
                        <li class="active">
                            <Link to="/">Home</Link>
                        </li>
                        
                        <li class="active">
                            <Link to="/Projects">Projects</Link>
                        </li>
                        <li class="active">
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        );
}

export default Header;

