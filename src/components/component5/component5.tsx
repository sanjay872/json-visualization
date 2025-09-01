import './component5.css';

function Component5({removeComponent}:any){
    return(
        <div className="comp5">
            <div className="comp5-title">Component 5</div>
            <button className="comp5-btn" onClick={removeComponent}>Delete</button>
        </div>
    );
}

export default Component5;