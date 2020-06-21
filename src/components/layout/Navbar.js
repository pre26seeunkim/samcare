import React from 'react';

export default () => {
    return ( 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-barnd" href="index.html">
                    Samcare
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse"
                    data-target="#mobile-nav"
                >
                    <span className="nav-bar-toggler-icon"/>
                </button> 
            </div>
        </nav>
    );
}