import React from "react";
import "./style.css"
import { useState } from "react";
import { currencies } from "../currencies"


const Form= ()=>{
    const [amount, setAmount] = useState("1");
     const [amount2, setCurrency] = useState("4.73");
   const [amount3, setAmount3] = useState(amount*amount2);
   const [currency, setCurrency2] = useState(currencies[0].code);


   const calculateResult = (currency, amount) => {
    const rate = currencies.find(
      ({ rate }) => rate === currency
    ).rate;
    }

const increase =()=> {
setAmount3((amount*amount2).toFixed(2));
calculateResult();

}
   


const onSubmit = (event) => {
  event.preventDefault();
  increase();
};

console.log(currencies[0].code);  



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
        
        <select  value={currency} onChange={({ target }) => setCurrency(target.value)} className="form__select">
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
         {amount3}
      
         </strong></p>


</form>



)};


export default Form;