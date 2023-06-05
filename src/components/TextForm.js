import React,{useState} from 'react'

function TextForm(props) {
  const [text,setText]= useState('Enter here');

  const handleUpClick = () =>{
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success"); 
  }
  const handleLoClick = () =>{
    let newText= text.toLowerCase();
    setText(newText); 
    props.showAlert("Converted to Lowercase!","success"); 
  }
  const handleClearText = () =>{
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!","success"); 
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  return (
      <>
       <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
       </div>
       <div className='container my-3' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
       </div>

       </>
  )
}

export default TextForm
