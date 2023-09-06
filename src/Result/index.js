

const Result = ({ result }) => (
    <div className="result">Result:
        {result && (
            <>
                <strong>
                    {result.resultCalc} 
                </strong>
            </>
        )}
    </div>
);

export default Result;