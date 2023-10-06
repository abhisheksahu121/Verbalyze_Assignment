import React, { useState } from "react";
import { Link } from "react-router-dom";
import { serviceDropdown } from "./NavItems";
import "./Dropdown.css"

export const Dropdown = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);

      return <div>
      <ul className={isOpen ? "services-submenu clicked" : "services-submenu"}
      onClick={() => setIsOpen(!isOpen)}>
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
            <Link to={item.path} className={item.cName} 
            onClick={() => setIsOpen(false)}>
            {item.title}
            </Link>
            </li>
          )
        })}
      </ul>
      </div>
}