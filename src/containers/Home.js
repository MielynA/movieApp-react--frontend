import React from 'react'; 
import '../style/home.css';

export default class Home extends React.Component {
     constructor(props) {
         super(props);
         this.state = { 
        //    movies: [],
        //    searchInput: '',
         }
     }   

   render(){
      const noResults = <div className = 'alert alert-secondary' role='alert'> No Search Result yet!
      </div>

       return(
        <React.Fragment>
           <div>
           <h1>Welcome to Movie App!</h1>
           </div>
        </React.Fragment>
       );
   }

}