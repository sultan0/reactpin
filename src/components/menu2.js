import React, {Component} from 'react'; 



class Menu2 extends Component{

    constructor(){
        super()
        this.state = {
            notificaion: [
                "Notification-1",
                "Notification-3",
                "Notification-4",
                "Notification-5",
            ],

            showNotification: "",
            visibility: false
        } 
    }
 
    getNotification = () =>{ 

            this.setState({
                showNotification: this.state.notificaion.map(items => (<li key={items}>{items}</li>
                ))    
            }) 
    }
  
    render(){
        
        return(
            <div className="header">
                <div className="container">
                <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="text-center mb-20">
                                <h1>Notificaion Status</h1>
                                <p>Check notificatin read/unread</p>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="card border-dark mb-3"> 
                                <div className="card-body text-dark"> 
                                    <p className="card-text" style={{textAlign: 'center'}}>

                                        {this.state.notificaion.length > 0 
                                         ?
                                        <span>You Have <button onClick={this.getNotification}>{this.state.notificaion.length}</button> Unread Notifications</span>
                                         : 
                                        <span>You Have <button onClick={this.getNotification}>{this.state.notificaion.length}</button> Unread Notifications}</span>} 
                                        
                                    </p> 
                                    <strong>{this.state.showNotification}</strong>
                                  
                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                       
            </div>
        );
    }
}

export default Menu2;
 