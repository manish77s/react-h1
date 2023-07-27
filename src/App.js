import React, { useState } from 'react';
import Funcomp from './Functioncompo';
import Classcompt from './Classcompo';
function App() {
  const[fState,setFState]= useState(false)
  const[cState,setCState]= useState(false)
  return (
   
    <div className="App"> 
      
     <h1>This is Functional and Class Component</h1>

     <button className="btn" onClick={()=>setFState(!fState)}>This is Function Component</button>
   
     <button className="btn" onClick={()=>setCState(!cState)}>This is  Class Component</button>
     
    <div class="container"> 
    {fState ? <Funcomp/>: " "}
    {cState && <Classcompt/>}     
    </div>
     
     </div>
  );
}

export default App;