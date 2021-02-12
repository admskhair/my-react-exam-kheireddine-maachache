import React,{Component} from 'react';
import YouTube from 'react-youtube';
import axios from 'axios'; 
//import Filmlist from 'video-list-item';
//import Serachbar from'./Components/search-bar';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500"
const url2="https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images&api_key=7677704d72de68dc39913f40f57d718e"
var film={}
class Accueil extends Component {
    constructor (props){
        super(props);
        this.state={
            films: [ ] ,
            textr : ''
        }
        
      this.onchange = this.onchange.bind(this);
      this.search = this.search.bind(this);
   }
   onchange(event){
    this.setState({textr : event.target.value});

   }
   search()
   {
       alert('film '+this.state.textr);
   }
   showfilm(f)
   {
       film=f;
   }
   state = { films: [ ]    } 
    
    componentDidMount() { 
        axios.get(url2).then(res =>
         { const films = res.data.results; 
            film=films[0];
            this.setState({ films });        
         })     
        } 
    render()
    {
        return(
            <div>
            <div >
                <form onSubmit={this.search}>
                    <input className='search' type="text"  placeholder="rechercher un film "  value={this.state.textr} onChange={this.onchange} />    
                    <input type="submit" value="search" />
                </form>
            </div>
            <table border="2" height="100%" >
                <tbody>                
                    <tr>
                        <td width="80%">
                            <tr >
                                <td width="100%">                                    
                                    {/* <YouTube videoId={film.id} /> */} 
                                    <iframe width="100%" height="600"
                                    src="https://www.youtube.com/embed/$film.id">
                                    </iframe> 
                                </td>
                            </tr>               
                            <tr>
                                <td>{film.title}  </td>                                                
                            </tr>              
                            <tr>
                                <td>{film.overview}  </td>                 
                            </tr>
                        </td>
                        <td  border="2">
                            <tr>
                                <td>Vous aimerez aussi ..</td>
                            </tr>
                            { this.state.films.slice(0, 6).map(film =>                 
                            <tr onClick={() => this.showfilm(film)}>
                                <td><img src={IMAGE_BASE_URL+film.poster_path} height="50" width="50"/></td>
                                <td>{film.title}  </td>
                                                
                            </tr>)                  
                            } 
                        </td>
                    </tr>
                </tbody>

            </table>
            </div>

        );
    }

}
export  default Accueil;