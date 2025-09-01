import './component1.css';
import { useState } from "react";


function Component1(){
    
    const [count,setCount]=useState<number>(0);

    function increment(){
        setCount((val)=>val+1);
    }

    function decrement(){
        setCount((val)=>val-1);
    }

    return(
        <div className="comp1">
            <div className="title">
                Graph UI
            </div>
            <div className="counter">
                Counter
                <button className='counter-btn' onClick={decrement}>-</button>
                <div>{count}</div>
                <button className='counter-btn' onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Component1;