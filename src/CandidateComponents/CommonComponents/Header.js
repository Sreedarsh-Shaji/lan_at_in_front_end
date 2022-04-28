import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link } from 'react-router-dom';

import Cookies from 'universal-cookie';

class Header extends Component {
    render() {
        const isCompanyLoggedIn = AuthenticationService.isJobSeekerLoggedIn();
        console.log(isCompanyLoggedIn);
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div>{isCompanyLoggedIn && <Link to="/Candidate/Vacancies" className="navbar-brand">Dashboard</Link>}</div>
                   <ul className="navbar-nav">
                       {isCompanyLoggedIn && <li><Link to="/Candidate/Vacancies" className="nav-link">Vacancies</Link></li>}
                       {isCompanyLoggedIn && <li><Link to="/Candidate/see-applied-positions" className="nav-link">Applied Vacancies</Link></li>}
                       {isCompanyLoggedIn && <li><Link to="/Candidate/see-interview-invites" className="nav-link">Interview Invites</Link></li>}
                       {isCompanyLoggedIn && <li><Link to="/Candidate/see-profile" className="nav-link">Profile</Link></li>}
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isCompanyLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isCompanyLoggedIn &&  <li><Link to="/home" className="nav-link"  onClick={AuthenticationService.companyLogout}>Logout <br/><small>{ new Cookies().get('Jobseeker').email} </small></Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;