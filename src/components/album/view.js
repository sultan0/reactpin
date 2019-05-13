import React, {Component} from 'react'


class View extends Component{ 
    render(){ 
        console.log(this.props)
        return( 
            <div className="col-lg-12"> 
                <div className="card border-dark mb-12"> 
                    <div className="card-body text-dark">  
                        <div className="album">
                            <p>{this.props.match.params.albumId}</p> 
                        </div>
                    </div> 
                </div> 
            </div>   
        );
    }
}

export default View;