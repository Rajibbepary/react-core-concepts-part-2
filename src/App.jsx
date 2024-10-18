
import './App.css'

function App() {
 function handelClick(){
    alert("button clicked")
 }

 const handelClick2 = () =>{
  alert('button click 2')
 }

 const addToFive = (num) =>{
  alert(num + 5);
 }

  return (
    <>
    
      <h3>React Core Concepts</h3>
      <button onClick={handelClick}>Click Me</button>
      <br /> <br />
      <button onClick={handelClick2}>Click Me2</button>
      <br /> <br />
      <button onClick={() =>{alert('third clicked')}}>third</button>
      <br /> <br />
      <button onClick={() =>addToFive(3)}>Four</button>
    </>
  )
}

export default App
