import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                    <NavLink className="navbar-brand logo" to="#">Noxe</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tv">Tv Shows</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/people">People</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/network">Network</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className='icons'>
                        <i className="fa-brands fa-facebook mx-1"></i>
                        <i className="fa-brands fa-spotify mx-1"></i>
                        <i className="fa-brands fa-instagram mx-1"></i>
                        <i className="fa-brands fa-youtube mx-1"></i>
                        </div>
                        <NavLink className="nav-link text-white" to="/network">Logout</NavLink>
                    </div>
                </nav>
            </>
        )
    }
}
