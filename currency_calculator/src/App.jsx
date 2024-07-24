import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then((e)=>{console.log(e); return e.json()}).then((e)=>{console.log(e);  for(const key in e) {
     const newOption = document.createElement("option");
     const otheroption = document.createElement("option");
     newOption.innerHTML=key;
     otheroption.innerHTML=key;
      document.querySelector("#options").appendChild(newOption);
      document.querySelector("#optionsto").appendChild(otheroption);
    }
    });
    function generate(){
    const changefrom=document.querySelector("#options").value;
    const changeto= document.querySelector("#optionsto").value;
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${changefrom}.json`).then((e)=>{ return e.json();}).then(
      (e)=>{const change=(e[changefrom][changeto]);  const ans= change*document.querySelector("#number").value;
        setCount(ans);
      }
    ).catch((error)=>{console.log(error,"couldn't find the ")})
    }
  return (
    <>
      <div className='box'> Currency Converter
      <div className='from'>From <input type="number" id="number"></input>  <select id="options">
        <option>dks</option>
      </select></div>
         
      <div className='to'>To <input type="number"></input>  <select id="optionsto">
        <option>dks</option>
      </select></div>
      <div id='result'>The conversion is {count} </div>
      <button onClick={generate}>Find out now </button>
      </div>
      
    </>
  )
}

export default App
