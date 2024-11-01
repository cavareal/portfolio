import '@fontsource/inter';
import NavigationMenu from "../components/NavBar.js";
import React from 'react';
import NavigationBar from "../components/NavigationBar.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const showAnim = gsap.from('.main-tool-bar', {
        yPercent: -100,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: "max",
        markers: true,
        onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
    });
    return (
        <div>
            {/*<head>*/}
            {/*    <link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
            {/*    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>*/}
            {/*    <link*/}
            {/*        rel="stylesheet"*/}
            {/*        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"*/}
            {/*    />*/}
            {/*</head>*/}
            <header className="main-tool-bar">
                <NavigationMenu/>
            </header>
        </div>
)
    ;
} export default Header;