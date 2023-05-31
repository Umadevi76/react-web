import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css'
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
  const toggleMode = ()=>{
    if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor='#042743';
  }
  else{
    setMode("light");
    document.body.style.backgroundColor='white';
  }
}
  return (
    <div>
      <BrowserRouter>
     <Navbar title="TextUtils" page="Home" mode={mode} toggleMode={toggleMode}/>
     <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          
          <Route path="/" element={<div className='container'>
              <TextForm heading="Enter the text to analyse" mode={mode}/>
            </div>}>
          </Route>
        </Routes>
    
        </BrowserRouter>
    </div>
  )
}

export default App;
 