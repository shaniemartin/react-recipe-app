import React, { Component } from 'react';
import './nav.styles.css';

export class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">Recipe App</div>
                <div className="links">
                    <ul>
                        <li><a>New Recipe</a></li>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Nav
