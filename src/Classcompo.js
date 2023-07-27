import React, { Component } from 'react';
import './App.css';
class Classcompt extends Component{
    render(){
        return(
            <div class="classcomp">
               <h1>Styling using Classcomponent</h1>
                 <p className="child">This is done by External css</p>
                 <p style={{color:'blue'}}>This is done by Inline css</p>
            </div>
            
        )
    }
   
}

export default Classcompt;
