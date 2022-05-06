import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const isCompanyLoggedIn = AuthenticationService.isCompanyLoggedIn();
        const { history } = this.props;
        
        
        if(!isCompanyLoggedIn){
            alert("This company account is logged out. \n Please login now.");
            return <Redirect to="" />
        }
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href='#' className="navbar-brand">Dashboard</a></div>
                   <ul className="navbar-nav">
                       {isCompanyLoggedIn && <li><Link to="/Student/Home"  className="nav-link">Home &nbsp;&nbsp;|</Link></li>}
                       {isCompanyLoggedIn && <li><Link to="/Student/career-path"  className="nav-link">Career Path &nbsp;&nbsp;|</Link></li>}
                       {isCompanyLoggedIn && <li><Link to="/Student/see-career-path"  className="nav-link">Saved Path</Link></li>}
                       {isCompanyLoggedIn && <li><Link to="/Company/Vacancies"  className="nav-link">Upgrade</Link></li>}
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isCompanyLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isCompanyLoggedIn &&  <li><Link to="/login" className="nav-link"  onClick={AuthenticationService.companyLogout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;