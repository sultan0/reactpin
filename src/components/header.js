import React, { Component } from 'react';

import {
    Link
}  from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header"> 
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="text-center mb-20">
                                <h1>Welcome To My "React" PIN Project!</h1>
                                <p>See Bellow my projects pins</p>
                            </div>
                        </div>
                    </div> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                            <div className="card border-dark mb-3">
                                <div className="card-header">Axios API Data</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title">View Data From API</h5>
                                    <p className="card-text">using jsx-component, props, state, map in react</p>
                                    <Link to="/view-data-api" className="btn btn-primary">Go</Link>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                            <div className="card border-dark mb-3">
                                <div className="card-header">Notification Status</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Notification Status</h5>
                                    <p className="card-text">Show Read/Unread notification from array.</p>
                                    <Link to="/menu2" className="btn btn-primary">Go</Link>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                            <div className="card border-dark mb-3">
                                <div className="card-header">Menu 3</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Dark card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/menu3" className="btn btn-primary">Go</Link>  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-4 col-xs-12">
                            <div className="card border-dark mb-3">
                                <div className="card-header">Menu 4</div>
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Dark card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/menu4" className="btn btn-primary">Go</Link>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul> 
                </ul>
            </div>
        );
    }
}

export default Header;