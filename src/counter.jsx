import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const myFunciton = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handelReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div style={{border:'2px solid yellow', padding:'20px', borderRadius:'10px'}}>
            <h3>Counter:{count}</h3>
            
            <button onClick={myFunciton}>Add</button> <br /> <br />
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}