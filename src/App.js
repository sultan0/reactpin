import React, { Component } from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Route,  
} from 'react-router-dom';

// Components
import Header from './components/header'; 
import ViewDataAPI from './components/album/view-data-api';
// import View from './components/album/view';
import Menu2 from './components/menu2';
import Menu3 from './components/menu3';
import Menu4 from './components/menu4';
class App extends Component {
  render() {
    return (
      <Router>  
        <div className="allinone"> 
          
            <Route exact path='/' component={Header}></Route>
            <Route exact path='/view-data-api' component={ViewDataAPI}></Route>
            <Route exact path='/menu2' component={Menu2}></Route>
            <Route exact path='/menu3' component={Menu3}></Route>
            <Route exact path='/menu4' component={Menu4}></Route> 
            {/* <Route path="/album/:albumId" component={View} /> */}
          
        </div> 
      </Router>
    );
  }
}

export default App;
