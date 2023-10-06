import React from 'react';
import {Link} from "react-router-dom";
import "./Button.css"

export const Button = () => {
return <div>
    <Link to="signup">
    <button className='btn'>Sign Up</button>
    </Link>
</div>
}