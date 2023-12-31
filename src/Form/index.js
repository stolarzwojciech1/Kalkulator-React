import React from "react";
import "./style.css"
import { useState } from "react";
import { currencies } from "../currencies"
import Result from "../Result";

const Form= ()=>{
    const [amount, setAmount] = useState("1");
   const [currency, setCurrency2] = useState("2");
   const [result, setResult] = useState("1");
  

   const calculateResult = (currency, amount) => {
   
    const rate = currencies.find(({name}) =>name === currency).rate;
   

setResult({
  
resultCalc: amount / rate,
});


      
    
    
    };

const increase =()=> {

calculateResult(currency,amount);

}
   


const onSubmit = (event) => {
  event.preventDefault();
  increase();
};




return(



<form className="form" onSubmit={onSubmit}>
    <fieldset className="form__fieldset">
    <legend className="form__legend">Twoje dane</legend>
    <p>
        <label><span className="form__labelText">Kwota euro </span>
        <input 

onChange={({ target }) => setAmount(target.value)}
        value={amount}
        className="js-usd form__field" 
        type="number"  
        min="0" 
        step="0.01" 
        />

        </label>
        
        </p>
        
        <select  value={currency} onChange={({ target }) => setCurrency2(target.value)} className="form__select">
      {currencies.map(currency => (
        <option key={currency.name}>
          {currency.name}
        </option>
      ))}
         
    </select>

</fieldset>
    
    <p><button
     className="form__button">Policz</button></p>
    <p>USD: <strong className="js-value">
    <Result
                    result={result}
                />
      
         </strong></p>

</form>



)};


export default Form;