import React, {Component, Fragment} from 'react';
import axios from 'axios';

class View extends Component{

    state = {
        comment: null,
        loading: true
    }

    componentDidMount () {
        const { albumId }  = this.props.match.params

        axios.get('https://jsonplaceholder.typicode.com/comments/' + albumId)
        .then(response => {
            this.setState({
                comment: response.data,
                loading: false
            })
        })
        .catch(error => console.log('error'))
    }
    render(){

        return(
            <div className="col-lg-12">
                <div className="card border-dark mb-12">
                    <div className="card-body text-dark">
                        <div className="album">
                        {this.state.loading ? (
                            <p>loading...</p>
                        ) : (
                            <Fragment>
                                <p>{this.state.comment.id}</p>
                                <p>{this.state.comment.name}</p>
                            </Fragment>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View;