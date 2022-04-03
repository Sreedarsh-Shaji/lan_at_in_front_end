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
                        {isAdminLogin && <li><Link to="/Admin/All-users"  className="nav-link">Comapnies</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/View-all-recruiters"  className="nav-link">Recruiters</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/View-all-vacancies"  className="nav-link">Vacancies</Link></li>}
                        {isAdminLogin && <li><Link to="/Admin/View-all-job-seekers"  className="nav-link">Job Seekers</Link></li>}
                   </ul>
   
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        
                        {!isAdminLogin && <li><Link to="/home" className="nav-link">Login</Link></li>}
                        {isAdminLogin &&  <li><Link to="/login" className="nav-link"   onClick={AuthenticationService.logout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;