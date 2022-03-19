import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const isAdminLogin = AuthenticationService.isAdminLoggedIn();
        console.log(isAdminLogin);
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Dashboard</a></div>
                   <ul className="navbar-nav">
                        {isAdminLogin && <li><Link to="/Admin/Home"  className="nav-link">Home</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/All-users"  className="nav-link">Users</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/All-agencies"  className="nav-link">Agencies</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/All-trips"  className="nav-link">Trips</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/All-officers"  className="nav-link">Office</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/All-Vehicles"  className="nav-link">Vehicles</Link></li>}
                   </ul>
   
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        
                        {!isAdminLogin && <li><Link to="/home" className="nav-link">Logout</Link></li>}
                        {isAdminLogin &&  <li><Link to="/login" className="nav-link"   onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;