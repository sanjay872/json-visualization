import React, { useState } from 'react';

import ComponentList from '../component_list/component_list';
import Component1 from '../component1/component1';
import Component2 from '../component2/component2';
import Component3 from '../component3/component3';
import Component4 from '../component4/component4';
import Component5 from '../component5/component5';
import './component_page.css';

function ComponentPage(){
    const [show,setShow]=useState<boolean>(true);
    const [highlight,setHighlight]=useState<number>(0);

    const hideComponent=()=>{
        setShow(false);
    }

    const updateHighlightPage=(page:number)=>{
        setHighlight(page);
    }
    return (
        <div className='main'>
            <div className='main_left'>
                <ComponentList highlight={updateHighlightPage} />
            </div>
            <div className='main_right'>
                <div className={highlight===1?'highlight':''}>
                <Component1/>
                </div>
                <div className={highlight===2?'highlight':''}>
                <Component2/>
                </div>
                <div className={highlight===3?'highlight':''}>
                <Component3/>
                </div>
                <div className={highlight===4?'highlight':''}>
                <Component4/>
                </div>
                <div className={highlight===5?'highlight':''}>
                {show && <Component5 removeComponent={hideComponent}/>}
            </div>
        </div>
    </div>
    );
}

export default ComponentPage;