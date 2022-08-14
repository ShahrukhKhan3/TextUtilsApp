import React,{useState} from 'react'
import './TextForm.css';
export default function TextForm() {
    const [text,setText]=useState('');
    const changeHandler=()=>{
setText(text.toUpperCase());
    }
const handleChange=(e)=>{
setText(e.target.value);
}
const handleLow=()=>{
  setText(text.toLowerCase());
}
const handleclear=()=>{
  setText('')
}
  return (
    <div className="container">
    <textarea className="form-control" id="textAreaExample1" rows="4" onChange={handleChange} value={text}></textarea>
    <label className="form-label" htmlFor="textAreaExample"></label>
    <button onClick={changeHandler} className='button'>TO Upper Case</button>
    <button onClick={handleLow}  className='button'>To Lower Case</button>
    <button onClick={handleclear} className='button'> Clear Text</button>
    <p>Here total characters are {text.length} and total words are {text.split(" ").length}</p>
    <h1>Preview</h1>
    <p>{text}</p>
  </div>
  )
}
