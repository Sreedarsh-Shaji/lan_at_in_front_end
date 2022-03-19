import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const isUserLogin = AuthenticationService.isUserLoggedIn();
        console.log(isUserLogin);
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Dashboard</a></div>
                   <ul className="navbar-nav">
                       {isUserLogin && <li><Link to="/User/Home"  className="nav-link">Home</Link></li>}
                       {isUserLogin && <li><Link to="/User/Office"  className="nav-link">Offices</Link></li>}
                       {isUserLogin && <li><Link to="/User/Trips"  className="nav-link">View Trips</Link></li>}
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogin && <li><Link to="/home" className="nav-link">Logout</Link></li>}
                        {isUserLogin &&  <li><Link to="/login" className="nav-link"   onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;