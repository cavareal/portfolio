import '@fontsource/inter';
import NavigationMenu from "../components/NavBar.js";
import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import './Header.css';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    useEffect(() => {
        const showAnim = gsap.from('.main-tool-bar', {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
    }, []);


    return (
        // <header className="main-tool-bar">
        //     <NavigationMenu />
        // </header>
        <div className="main-tool-bar">
            Header
        </div>
    );
}

export default Header;
