import React from 'react'; 
import axios from 'axios'; 



export default class Movies extends React.Component { 
    constructor(props){
        super(props); 
        this.state = {
            movies: [],
            searchInput: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5002/movies/').then((data)=>{
            console.log(data)
            this.setState({movies: data.data.newMovie},()=>{
            })
            
        }).catch((error)=> {
            // console.log(error);
        })
    }
  
    
  render(){
      return(
          <React.Fragment>
              <div>
           {
               this.state.movies.map((allmovies, i )=>{
                   console.log('list of all the movies', allmovies)
                   return(
                       
                       <React.Fragment>
                           <div>{allmovies.title}</div>
                           <div> 
                           <img scr={allmovies.img_url.pic}></img> 
                           </div>
                       </React.Fragment>
                   );
               })
           }
           </div>
          </React.Fragment>
      );
  }
 
}