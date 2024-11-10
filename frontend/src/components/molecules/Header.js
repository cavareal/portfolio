import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(Observer);

function Header() {
    const headerRef = useRef(null);

    useGSAP(() => {
        Observer.create({
            target: window,
            type: 'wheel,touch,scroll',
            onUp: () => gsap.to(headerRef.current, { y: 0, duration: 0.3 }), // Réapparait quand on scroll vers le haut
            onDown: () => gsap.to(headerRef.current, { y: -100, duration: 0.3 }), // Disparaît quand on scroll vers le bas
        });
    }, []);

    return (
        // <header ref={headerRef} style={{ position: 'fixed', top: 0, left: 0, right: 0, z: 20, backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
        <header ref={headerRef} className={"main-tool-bar"}>
            Header
        </header>
    );
}

export default Header;
