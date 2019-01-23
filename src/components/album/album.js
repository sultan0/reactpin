import React, {Component} from 'react'


class Album extends Component{ 
    render(){ 
        return( 
            <div className="col-lg-6"> 
            <div className="card border-dark mb-3"> 
            <div className="card-body text-dark"> 
            
                <div className="album">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.email}</p>  
                    <p>{this.props.body}</p> 
                </div>
            </div> 
            </div> 
            </div>  
            
        );
    }
}

export default Album;