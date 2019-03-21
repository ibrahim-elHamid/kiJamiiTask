import React, { Component } from 'react';
import logo from '../logo.png';
import axios from 'axios';
import {link} from 'react-router';
import { browserHistory} from 'react-router';
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/Button'
import  './components/Details';
import  'styles/app.css';
import  'styles/base.css';
import  'styles/animate.css'
import  'styles/normlize.css'
import  'styles/animate.css'
import  'jsFiles/bootstrap.min.js'
import  'jsFiles/jquery-1.12.3.min.js'
import  'jsFiles/wow.min.js'

///using the url for obtaining the the image for a show
var imgUrl="http://static.tvmaze.com/uploads/images/original_untouched/0/581.jpg";
///
export class Home extends React.Component {
///declaring the array to recieve the data in////
constructor(props){
    super(props)
    this.state={
      movies:[],
      choices:[]
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
onSubmit(event){
    event.preventDefault();
    var query = this.input.value;
    console.log(query);
    this.ComponentDidMount(query);
  }
  /// using axios for integrating requests  for mentioned order
 ComponentDidMount(query){
    var api = 'https://api.tvmaze.com/shows/82?&query='
    axios.get(api + query)
      .then(response => 
        this.setState ({
          movies:response.data.results
        }))}
   /// using axios for integrating requests for all shows
 ComponentDidMount(){
    var api = 'https://api.tvmaze.com/schedule?country=US&date=2016-02-1'
    axios.get(api)
      .then(response => 
        this.setState ({
          choices:response.data.results
        }))
  }
  const styles={media:
    {height:0,
    paddingTop:'56',
    marginTop:'30'
   }};/// 
    render() {
    ///
    const {movies} = this.state;
    var movieList = movies.map((movie) => 
    <div className="col-4 movie">  
    <link to={"/Details/"+ movies }>/// Using React-router for Navigations bet pages
    <CardMedia 
      className={classes.media}
      ***image={require(imgUrl + movie.poster_path)}***
      **style={styles.media}**/> 
    </link>
      <p className="overview">{movie.overview}</p>
      <h3  key={movie.id}className="text-center movieTitle">{movie.title}</h3>
    </div>) ///
        return (
           <div class="my-work text-center" id="works">
           <div class="container">
            <h2 class="upper">Ki<span class="main-color">Jamii</span></h2>
           </div>
           </div>
         <div className="App">  
            <div className="container">
            <div className="row">
            <h2 className="col-12 text-center">Search for a Movie</h2>
              <form onSubmit={this.onSubmit} className="col-12">
                <input type ="text" className= "col-12 form-control"
                 list="choices" placeholder="Search Movies..."
                ref = {input => this.input = input}/> //what user pass 
                   /// Determining the titles for shows
                var choicesList = choices.map((choice) =>
                <datalist id="choices">
               <link to={"/Details/"+ movies }> 
               <option value={choice.title}></link></datalist>);
              </form>
              <div>         ///
                <ul className= "col-12 row">{movieList}</ul>
              ///           
              </div> </div></div></div>
        <div class="footer">
          <div class="container">
          <span class="copyright">&copy; 2019 COPYRIGHT DESING STUDIO</span>
        <span class="design">DESIGNED & DEVELOPED BY IBRAHIM ABD EL HAMID</span>
        </div> </div>  
    );}}