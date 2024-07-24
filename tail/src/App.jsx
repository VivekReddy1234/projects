import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[size,setlength]=useState(8);
 let [result, setresult]=useState("");
 let [numbers, setnumbers]=useState(false);
 let [Characters,setcharacters]=useState(false);
 let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 const  num="012345679";
 const char="!@#$%^&*()_+";
const generate=useCallback(()=>{
  result="";
  for(let j=0; j<size; j++){
    if(numbers)letters+=num;
    if(Characters)letters+=char;
    const a= Math.floor(Math.random()*letters.length+1);
    result=result+letters[a];
  }
  setresult(result);
 },[numbers,Characters,size,setresult]);
  useEffect(()=>{generate()},[numbers,Characters,size]);
  return (
    <>
    <div className='page'>
      <div className='result'> Here it is {result}</div>
    <div className='include'>
      <input type="range" min={5} max={20} value={size} onChange={(e)=>{setlength(e.target.value)}}></input> Length({size}) 
      <input type='checkbox' onChange={(e)=>{setnumbers((prev)=>!prev)}}></input> Numbers
      <input type="checkbox" onChange={(e)=>{setcharacters((prev)=>!prev)}}></input> Characters
    </div>
    </div>
    </>
  )
}

export default App
