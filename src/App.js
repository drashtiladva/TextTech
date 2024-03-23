import { useState } from "react";
import Navbar from "./Components/Navbar";

import About from "./Components/About";

import TextForm from "./Components/TextForm";

 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";




function App() {
   const[mode,setmode]=useState('light');//where dark mode is enable or not
    
   const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#495057";
      
      
  
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
     

      

      
    }
  } 
  return (
    <>
      <Router>
      <Navbar title="TextTech editor" mode={mode} togglemode={togglemode}/>
      
      <div className="container my-3">
         <Routes>
         <Route path="/about" element= {<About mode={mode}/>}>
           
          </Route>

          
          <Route path="/" element={<TextForm heading="Enter the Text to Analyze" 
          mode={mode} /> 
           }>
          </Route>

          
         </Routes>

      </div>
      
   
      </Router>
    </>
  );
}

export default App;
