import { useState } from "react"


export default function Counter(){
    const [count, setCount] = useState(0);
    // count [reduce, setReduce] = useState();

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }
    
    return (
        <div style={{border: '2px solid tomato', margin: '15px', padding: '15px', borderRadius: '8px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}