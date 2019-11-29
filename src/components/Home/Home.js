import React from 'react';
import {
    useLocation
} from "react-router-dom";

const Home = () => {
    let location = useLocation();
    return (
            <p>This is the home page from {location.pathname}!</p>
    );
};

export default Home;
