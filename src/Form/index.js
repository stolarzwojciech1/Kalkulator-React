import React from "react";
import "./style.css"
import { useState } from "react";


const Form= ()=>{
    const [amount, setAmount] = useState("1");
     const [amount2, setCurrency] = useState("4.73");
   const [amount3, setAmount3] = useState("0");

const increase =()=> {
setAmount3(amount3+1)

}

   

return(



<form className="form">
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
</fieldset>
    
    <p><button
     onClick ={increase}
     className="form__button">Policz</button></p>
    <p>USD: <strong className="js-value">
         {amount2 *amount} {amount3}
         </strong></p>


</form>



)};


export default Form;