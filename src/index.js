// PACKAGE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import {Router ,Route,IndexRoute} from 'react-router';
// COMPONENTS

import {Home} from './components/Home';
import {Details}  from './components/Details';

// STYLES

import 'normalize.css';
import './styles/app.css';
class App extends React.Component{
render(){
return (
       <Router history={browserHistory}>
          <Route path ={"/"} component ={Root}>
          <IndexRoute  component ={Home}/>
          <Route path ={"Details/:movie"} component ={Details}/>
          <Route path ={"Home"} component ={Home}/>
          </Route>
       </Router> 
	);
}
}
ReactDOM.render(<App />, document.getElementById('app'));