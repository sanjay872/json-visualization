import './component_list.css';

function ComponentList({highlight}:any){

    return(
        <div className="nav">
            <div className="nav_items">
                <div className="nav_items-item">
                    <button onClick={()=>{highlight(1)}}>Component 1</button>
                </div>
                <div className="nav_items-item">
                    <button onClick={()=>{highlight(2)}}>Component 2</button>
                </div>
                <div className="nav_items-item">
                    <button onClick={()=>{highlight(3)}}>Component 3</button>
                </div>
               <div className="nav_items-item">
                    <button onClick={()=>{highlight(4)}}>Component 4</button>
                </div>
                <div className="nav_items-item">
                    <button onClick={()=>{highlight(5)}}>Component 5</button>
                </div>
            </div>
        </div>
    );
}

export default ComponentList;