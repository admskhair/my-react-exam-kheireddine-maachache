import React from 'react'; 
import axios from 'axios'; 

import ReactDOM from "react-dom";

const IMAGE_BASE_URL='https://image.tmdb.org/t/p/w500Exemple : BASE_IMAGE_URL=${IMAGE_BASE_URL}[poster_path'
//const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500"
const urlimg="${IMAGE_BASE_URL}"
const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY="api_key=7677704d72de68dc39913f40f57d718e";
const url = '${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}';
const url2="https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=7677704d72de68dc39913f40f57d718e"
const url3="https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=7677704d72de68dc39913f40f57d718e"
        
export default class Filmlist extends React.Component { 
    state = { films: [ ]    } 
    
    componentDidMount() { 
        axios.get(url2).then(res =>
         { const films = res.data.results; 
            this.setState({ films });        
         })     
        } 
    render() {
         return (            
              <ul> { this.state.films.map(film =>                 
              <li>
                  {film.title} 
                  <img src={url+film.poster_path} />                
              </li>)                  
              }             
              </ul>         )     
              } 
    }