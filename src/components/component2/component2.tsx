import './component2.css';
import nature from '../../img/nature.jpg';

function Component2(){

    function redirect(){
        window.open("https://unsplash.com/photos/snow-capped-mountains-rise-above-a-grassy-landscape-LJh9ayGO8t8");
    }

    return(
        <div className='img_holder'>
            <img src={nature} alt="Nature Img" onClick={redirect}/>
        </div>
    );
}

export default Component2;