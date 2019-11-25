import React from 'react';
import './Sider.css';

const Sider = props => {
    let siderClass = ['sider'];
    if(props.show){
        siderClass = ['sider open'];
    }
    return (
        <nav className={siderClass}>
            <ul>
                <li><a href="/">Foo</a></li>
                <li><a href="/">Bar</a></li>
            </ul>
        </nav>
    );
};

export default Sider;