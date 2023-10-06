import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { navItems } from './NavItems';
import { Button } from './Button';
import { Dropdown } from './Dropdown';
import * as Icons from 'react-icons/fa';
import "./Navbar.css";


export const Navbar = () =>{
    const [dropdown, setDropdown] = useState(false);
return <div>
    {/* <h1> Hello Navbar</h1> */}
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
        <Icons.FaDev/>
        </Link>
        <h5> Dev WebSite </h5>
        <ul className='nav-items'>
            {navItems.map((item) => {
                if(item.title === "Services") {
                    return (
                    <li key={item.id} className={item.cName}
                    onClick={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                    >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown/>}
                    </li>
                );
                }
                return (
                    <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                    </li>
                );
            })}

        </ul>
        <Button/>
    </nav>
 
</div>
}