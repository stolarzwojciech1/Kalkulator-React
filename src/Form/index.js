import React from "react";
import "./style.css"
import { useState } from "react";
import { currencies } from "../currencies"


const Form= ()=>{
    const [amount, setAmount] = useState("1");
     const [amount2, setCurrency] = useState("4.73");
     const [value5, setCurrency5] = useState("4.73");
   const [amount3, setAmount3] = useState(amount*amount2);
   const [amount4, setAmount4]=useState("4.73");
   console.log(amount4);
const increase =()=> {
setAmount3((amount*amount2*value5.state).toFixed(2))
}
   
const onSubmit = (event) => {
  event.preventDefault();
  increase();
};



const onCurrencyChange = ({ target }) => {
  const nameOfCurrency = target.value;
  const selected = currencies.find((currency) => currency.name === nameOfCurrency);
  
  const rateOfCurrency = target.value;
  const selected2 = currencies.find((currency) => currency.rate === rateOfCurrency);
  
  console.log(`Została wybrana waluta ${currencies.name}`);
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
        <select value={value5}  onChange={onCurrencyChange()} className="form__select">
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
         {amount4}
      
         </strong></p>


</form>



)};


export default Form;