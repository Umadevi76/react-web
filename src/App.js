import logo from './logo.svg';
import './App.css';
import react,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css'
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState("light");

  const [alert,setAlert]= useState(null);

  const showAlert=(message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
   setTimeout(()=>{
     setAlert(null);
   },1500)
  }

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode("light");
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
}
  return (
    <>
    <Router>
     <Navbar title="TextUtils" page="Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className='container'>
      <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyse" showAlert={showAlert} mode={mode}/>} />
      </Routes>
      </div>
         
    
    </Router>
    </>
  )
}

export default App;
 