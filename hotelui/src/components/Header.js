import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbar-fixed">
                <a className="navbar-brand" href="">Hilton Booking</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link ">Hotels</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reservation" className="nav-link">Reservations</Link>
                    </li>
                    </ul>
                </div> 
                </nav>
        </div>
    )
}

export default Header;