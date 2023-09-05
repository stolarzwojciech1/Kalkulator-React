const Result = ({ result }) => (
    <p ><span>Kwota wynosi: </span> <strong>
        {result.resultAmount
            ? `${result.inputAmount} ${result.currencyFrom} = ${result.resultAmount} ${result.currencyTo}`
            : ""
        }
    </strong>
    </p>
);


export default Result;