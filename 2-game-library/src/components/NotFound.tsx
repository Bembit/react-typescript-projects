import React from 'react';
import { Link } from 'react-router-dom';

// not found component added because I love this gif

export default function NotFound() {
    return (
        <div id="fourofour" className="shop">
            <h1>404 - Route Not Found</h1>
            <img src="/panic.gif" alt="Funny GIF" />
            <Link className="btn-info" to="/">Go back to the shop</Link>
        </div>
    );
};