import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light mb-5" style={ {background: "#4b134f"}}>
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand text-white text-lg brand-text " to="/">
                        <i className="fas fa-backward" style={{marginRight: 10}}></i>
                        <i className="fas fa-pause-circle" style={{marginRight: 10}}></i>
                        <i className="fas fa-play-circle" style={{marginRight: 10}}></i>
                        <i className="fas fa-forward" style={{marginRight: 50}}></i>
                        <span style={{fontWeight: "bold"}}>MOVIE-APP</span>
                    </Link>
                </div>
                <ul className="navbar-nav ml-auto text-light d-inline-block">
                    <li className="nav-item d-inline-block mr-4">
                        <i className="fas fa-video fa-3x"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;