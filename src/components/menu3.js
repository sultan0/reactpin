import React, {Component} from 'react'; 

class Menu3 extends Component{
    render(){
        return(
            <div className="header">
                <div className="container">
                <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="text-center mb-20">
                                <h1>Menu 3</h1>
                                <p>Menu 3 title</p>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="card border-dark mb-3"> 
                                <div className="card-body text-dark"> 
                                    <p className="card-text">Pin Project Goes Here...</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu3;