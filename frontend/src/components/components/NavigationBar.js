import React from 'react';

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/photography">Photo</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar;