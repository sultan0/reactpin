import React, {Component} from 'react'
import {Link} from "react-router-dom"

class Album extends Component{ 
    render(){ 
        return(  
                <div className="card border-dark mb-3"> 
                    <div className="card-body text-dark">  
                        <div className="album">
                            <h5>{this.props.name}</h5>
                            <Link  to={`/album/${this.props.view}`}>View</Link> 
                        </div>
                    </div> 
                </div>  
        );
    }
}

export default Album;