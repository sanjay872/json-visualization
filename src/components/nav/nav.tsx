import { NavLink } from "react-router";
import './nav.css';

const Nav=()=>{
    return(
        <div>
            <nav className='navbar'>
                <NavLink to="/" className='navbar_item' end>Home</NavLink>
                <NavLink to="/components" className='navbar_item' end>Components</NavLink>
                <NavLink to="/jsondata" className='navbar_item' end>JSON Data</NavLink>
            </nav>
        </div>
    );
};

export default Nav;