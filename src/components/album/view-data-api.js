import React, {Component} from 'react'; 
import Album from './album'

import axios from "axios" 

class ViewDataAPI extends Component{

    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
        .catch(error => console.log('error'))
    }
 
    render(){
        let { posts } = this.state

        const half = (posts.length)/50

        console.log(half)

        if(posts.length === 0){
            return <h1>Loading...</h1>
        }
        else{
            return(
                <div className="header">
                    <div className="container">
                    <div className="row">
                            <div className="col-lg-12 col-sm-12 col-xs-12">
                                <div className="text-center mb-20">
                                    <h1>View Data From API</h1>
                                    <p>using jsx-component, props, state, map in react </p>
                                </div>
                            </div>
                        </div> 
                        <div className="row">  
                                {
                                    posts.map(post => 
                                        {
                                            return <Album key={post.id}  name={post.name} email = {post.email} body = {post.body}   />
                                        }
                                    )
                                }   
                        </div>
                    </div>
                </div>
            )
        }

      
    }
}

export default ViewDataAPI;