import React, { Component } from 'react';

class HeaderComponent extends Component{

    
    render(){
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><span className="navbar-brand">Lan@.in</span></div>
                    <ul className="navbar-nav">
                     
                    </ul>
                    <ul  className="navbar-nav navbar-collapse justify-content-end">
                    </ul>
               </nav>
            </header> 
        );
    }
}

export default HeaderComponent;