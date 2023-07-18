import React from "react";
import "./style.css"
import { useState } from "react";

const result = () =>{


return "sss";

}




const Form= ()=>{

const [amount, setAmount] = useState("");
return(



<form className="form">
    <fieldset className="form__fieldset">
    <legend className="form__legend">Twoje dane</legend>
    <p>
        <label><span className="form__labelText">Kwota euro </span>
        <input 

onChange={({ target }) => setAmount(target.value)}
        value={1}
        className="js-usd form__field" 
        type="number"  
        min="0" 
        step="0.01" 
        />

        </label>
        
        </p>
        <p>
        <label><span className="form__labelText" >Aktualny kurs </span>
        <input className="js-euro form__field" type="number" value="4.71" step="0.01" required/></label>
        
        </p>
</fieldset>
    
    <p><button
     
     className="form__button">Policz</button></p>
    <p>USD: <strong className="js-value">{result}</strong></p>
</form>



)};
console.log(target);

export default Form;