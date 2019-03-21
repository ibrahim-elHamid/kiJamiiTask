import React, { Component } from 'react';
import logo from '../logo.png';
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import {link} from 'react-router';
import { browserHistory} from 'react-router';
import  Home from './components/Home';
import  'jsFiles/bootstrap.min.js'
import  'jsFiles/jquery-1.12.3.min.js'
import  'jsFiles/wow.min.js'
import  'styles/normalize.css'
import  'styles/animate.css'
import  'styles/app.css';
import  'styles/base.css';

var imgUrl="http://static.tvmaze.com/uploads/images/original_untouched/0/581.jpg";

class Details extends Component{

///using react-routing for return to Main-page ///
onNavigateHome (){
	browserHistory.push("/Home");
}
render(){
///creating the header for details page///
return (
	 <div class="my-work text-center" id="works">
           <div class="container">
            <h2 class="upper">Ki<span class="main-color">Jamii</span></h2>
           </div>
           </div>
	<div className="col-1 movie">  
	///recieving the result{movie} and showing them in Details///
   <CardMedia 
      className={classes.media}
      ***image={require(imgUrl + movie.poster_path)}***
      **style={styles.media}**/> 
      <p className="overview">{this.props.params.(movie.overview)}</p>
      <h3  key={this.props.params.(movie.id)}className="text-center movieTitle">{this.props.params.(movie.title)}</h3>
      <button onClick={this.onNavigateHome} variant ="contained" className="primary">To Home</button>    
    </div>
    /// 
	<div class="footer">
<div class="container">
<span class="copyright">&copy; 2019 COPYRIGHT DESING STUDIO</span>
<span class="design">DESIGNED & DEVELOPED BY IBRAHIM ABD EL HAMID</span>
</div>
</div>);
}
}