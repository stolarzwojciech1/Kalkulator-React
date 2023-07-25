import React from "react";
import "./style.css"
import { useState } from "react";
import { currencies } from "../currencies"


const Form= ()=>{
    const [amount, setAmount] = useState("1");
     const [amount2, setCurrency] = useState("4.73");
   
   const [amount3, setAmount3] = useState(amount*amount2);
   
const increase =()=> {
setAmount3((amount*amount2).toFixed(2))
}
   
const onSubmit = (event) => {
  event.preventDefault();
  increase();
};

const [currencySelect, setCurrencySelect] = useState(currencies[0]);
const [result, setResult] = useState({
  finalResult: "",
  baseValue: 0,
  currency: null,
});

const onCurrencyChange = ({ target }) => {
  const nameOfCurrency = target.value;
  const selected = currencies.find((currency) => currency.name === nameOfCurrency);
  setCurrencySelect(selected);
  console.log(`Została wybrana waluta ${selected.code}`);
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
        <p>
        <label><span className="form__labelText" >Aktualny kurs </span>
        <input
        onChange={({ target }) => setCurrency(target.value)}
        className="js-euro form__field" 
        type="number" 
        value={amount2 }
        step="0.01" 
        required/></label>
        
        </p>
        <select onChange={onCurrencyChange} className="form__select">
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