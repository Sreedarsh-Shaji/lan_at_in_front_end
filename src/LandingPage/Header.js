
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
       
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   
                    <div><span className="navbar-brand">Lan@In</span></div>
                        
                        <ul  className="navbar-nav navbar-collapse justify-content-end">
                        </ul>
                        <ul className="navbar-nav">
                            
                            <li><Link to="/sign"  className="nav-link">SignUp</Link></li>
                            <li><Link to="/login"  className="nav-link">Login</Link></li>
                        
                        </ul>
               </nav>
            </header>  
        );
    }
}
export default Header;




  