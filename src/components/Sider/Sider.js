import React from 'react';
import {
    Link
} from "react-router-dom";
import './Sider.css';

const Sider = props => {
    let siderClass = ['sider'];
    if(props.show){
        siderClass = ['sider open'];
    }
    return (
        <nav className={siderClass}>
            <ul>
                <li>Home</li>
                <li><Link to="/about">Foo</Link></li>
                <li><Link to="/contact">Bar</Link></li>
            </ul>
        </nav>
    );
};

export default Sider;