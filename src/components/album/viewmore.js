import React, { Component } from 'react'
import { Link, Route } from "react-router-dom" 
export default class ViewMore extends Component {
    render() {
        return (
            <div className="col-lg-6">
                {/* here is im using params, and to match by clicking specific id to show/view more information */}
                <div className="row">
                    {this.props.passsatate && (
                        <Route path="/album/:albumId"
                            render={({ match }) => (
                                <ViewDetails posts={this.props.passsatate.find(pv => pv.id === parseInt(match.params.albumId))} />
                            )}
                        />
                    )}

                </div>
                
            </div>
        )
    }
}


// This component using for show details
const ViewDetails = ({posts}) =>{  
    return( 
        <div className="col-lg-6"> 
            <div className="card border-dark mb-3"> 
                <div className="card-body text-dark">  
                    <div className="album">
                        <h3>{ViewDetails.name}</h3> 
                        <h3>{ViewDetails.email}</h3> 
                        <Link to="./">Back To Home</Link>
                        
                    </div>
                </div> 
            </div> 
        </div>   
    );

}
