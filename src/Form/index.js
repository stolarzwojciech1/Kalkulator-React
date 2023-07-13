import React from "react";
import "./style.css"

const Form= ()=>(

<form className="form">
    <fieldset className="form__fieldset">
    <legend className="form__legend">Twoje dane</legend>
    <p>
        <label><span className="form__labelText">Kwota euro </span>
        <input className="js-usd form__field" type="number" value="1" min="0" step="0.01" required/>

        </label>
        
        </p>
        <p>
        <label><span className="form__labelText" >Aktualny kurs </span>
        <input className="js-euro form__field" type="number" value="4.71" step="0.01" required/></label>
        
        </p>
</fieldset>
    
    <p><button className="form__button">Policz</button></p>

</form>



)


export default Form;