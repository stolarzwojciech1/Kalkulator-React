import Form from "./Form"


function App({result}) {

  return (
    <>
    <body className="body">
    <div className="container">
   <p> Przelicz Euro na USD</p>
  
<Form result={result}/>

</div>

</body>
</>
  );
}

export default App;
