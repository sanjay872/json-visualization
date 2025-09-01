import './component3.css';
import { useState } from "react";

function Component3(){
    const [page,setPage]=useState<number>(1);

    function next(){
        setPage((val)=>val+1);
    }

    function prev(){
        setPage((val)=>val-1);
    }

    return(
        <div className='sections'>
            {page===1 && <div className='sections_item_1'>Section 1</div>}
            {page===2 && <div className='sections_item_2'>Section 2</div>}
            {page===3 && <div className='sections_item_3'>Section 3</div>}
            <div className='sections_actions'>
                {page>=1&&page<3&&<button className='sections_actions-next' onClick={next}>Next</button>}
                {page>1&&page<=3&&<button className='sections_actions-prev' onClick={prev}>Prev</button>}
            </div>
        </div>
    );
}

export default Component3;