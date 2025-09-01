import './component4.css';
import { useState } from "react";

function Component4(){
    const [title,setTitle]=useState<string>("Edit Title");

    return(
        <div className='comp4'>
            <div className='comp4-title'>{title}</div>
           <input className='comp4-input' type="text" name="title" id="title" onChange={(e)=>{setTitle(e.target.value)}} />
        </div>
    );
}

export default Component4;