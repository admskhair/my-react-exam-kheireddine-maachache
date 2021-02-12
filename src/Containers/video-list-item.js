import React from 'react'; 
import axios from 'axios'; 

import ReactDOM from "react-dom";
export default class Itemlist extends React.Component { 
    state = { films: [ ]    } 
    IMAGE_BASE_URL='https://image.tmdb.org/t/p/w500Exemple : BASE_IMAGE_URL=${IMAGE_BASE_URL}[poster_path'
    urlimg="${IMAGE_BASE_URL}[poster_path]"
    
    componentDidMount() { 
        const API_END_POINT = "https://api.themoviedb.org/3/";
        const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
        const API_KEY="api_key=7677704d72de68dc39913f40f57d718e";
        const url = '${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}';
        /*fetch(url)
      .then((response) => response.json())
      .then((data) => {const films = data; 
        this.setState({ films });
      } );*/
        axios.get(url).then(res =>
         { const films = res.data; 
            this.setState({ films });        
         })     
        } 
    render() {
         return (            
              <ul> { this.state.films.map(film =>                 
              <li>
                  {1}
                 
              </li>)                  
              }             
              </ul>         )     
              } 
    }