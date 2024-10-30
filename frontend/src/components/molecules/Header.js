import '@fontsource/inter';
import NavigationMenu from "../components/NavBar.js";
import React from 'react';
import NavigationBar from "../components/NavigationBar.js";

function Header() {
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                />
            </head>
            <header>
                <NavigationMenu/>
            </header>
        </div>
)
    ;
} export default Header;