import React,{Component} from 'react';

class Searchbar extends Component {
    constructor (props){
        super(props);
        this.state={
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
    render()
    {
        return(
            <div>
                <form onSubmit={this.search}>
                    <input type="text"  placeholder="rechercher un film "  value={this.state.textr} onChange={this.onchange} />    
                    <input type="submit" value="search" />
                </form>
            </div>

        );
    }

}
export  default Searchbar;