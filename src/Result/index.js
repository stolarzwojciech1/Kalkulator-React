const Result = ({ result }) => (
    <p ><span>Kwota wynosi: </span> <strong>
        {result
            ? `${result} `
            : ""
        }
    </strong>
    </p>
);


export default Result;