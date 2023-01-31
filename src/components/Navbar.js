import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'

const NavbarMaaz = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                       
                        The Techrotics Lab
                    </Link>
                    {/* <img src={"../assets/logo.png"}/> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="navbar-brand">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/diplomaT"  className="navbar-brand">
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/getdetails" className="navbar-brand">
                                    Payment
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            
        </>
    )
}

export default NavbarMaaz