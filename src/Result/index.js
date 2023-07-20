const Result = ({ result }) =>
!!result && (
  <>
    <strong>
      {result.amount.toFixed(2)};
    </strong>
  </>
);

export default Result;  