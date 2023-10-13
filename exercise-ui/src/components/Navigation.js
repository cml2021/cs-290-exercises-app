import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/create" className="nav-link">New Exercise</Link>
        </nav>
    )
};

export default Navigation;