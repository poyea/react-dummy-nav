import React from 'react';
import Toggler from '../Sider/Toggler';
import './Bar.css';
const Bar = props =>(
    <header className="bar">
        <nav className="bar__navigation">
            <div><Toggler click={props.togglerClickHandler}/></div>
            <div className="bar__home"><a href="/">Home</a></div>
            <div className="space"/>
            <div className="bar__navigation-items">
                <ul>
                    <li><a href="/">Foo</a></li>
                    <li><a href="/">Bar</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Bar;