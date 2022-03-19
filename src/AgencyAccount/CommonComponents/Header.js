import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const isAgencyLogin = AuthenticationService.isAgencyLoggedIn();
        console.log(isAgencyLogin);
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Dashboard</a></div>
                   <ul className="navbar-nav">
                       {isAgencyLogin && <li><Link to="/Agency/Home"  className="nav-link">Home</Link></li>}
                       {isAgencyLogin && <li><Link to="/Agency/Offices"  className="nav-link">Officers</Link></li>}
                       {isAgencyLogin && <li><Link to="/Agency/vehicles"  className="nav-link">Vehicles</Link></li>}
                       {isAgencyLogin && <li><Link to="/Agency/trips"  className="nav-link">View Trips</Link></li>}
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isAgencyLogin && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isAgencyLogin &&  <li><Link to="/home" className="nav-link"  onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;