import react from 'react'
import  './App.css'

function Funcomp(){
return(
    <>
    <div class='funcomp'><h1>Styling using Functioncomponent</h1>
    <p className='child'>This is done by External css</p>
    <p style={{color:'blue'}}>This is done by Inline css</p>
    </div>
    </>
)
}

export default Funcomp;