import React, { Component } from 'react';
import Album from './album'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import axios from "axios"

class ViewDataAPI extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => console.log('error'))
    }

    render() {
        let { posts } = this.state
        console.log(posts)
        if (posts.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <Router>
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <div className="text-center mb-20">
                                        <h1>View Data From API</h1>
                                        <p>using jsx-component, props, state, map, react router, router parameter in react </p>
  
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 sidebar">
                                    {
                                        posts.map(post => {
                                            return (
                                                <Album
                                                    key={post.id}
                                                    name={post.name}
                                                    email={post.email}
                                                    body={post.body}
                                                    view={post.id}

                                                />
                                            )
                                        }
                                        )
                                    }
                                </div>
                                <div className="col-lg-8">
                                    {posts && (
                                        <Route exact path="/album/:albumId"
                                            render={({ match }) => (
                                                <ViewPosts posts={(posts.find(pv => pv.id === parseInt(match.params.albumId)))} />
                                            )}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            )
        }


    }
}

export default ViewDataAPI;


// This component using for show details
const ViewPosts = ({ posts }) => {
    return (
        <div className="card border-dark mb-3">
            <div className="card-body text-dark">
                <div className="album">
                    <h2>{posts.name}</h2>
                    <p>{posts.email}</p>
                    <p>{posts.body}</p>
                </div>
            </div>
        </div>
    );

}