import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef();

    useEffect(() => {
        const sections = gsap.utils.toArray('.section');
        const totalWidth = sections.length * window.innerWidth;

        // Déplacement horizontal basé sur le scroll vertical
        gsap.to(containerRef.current, {
            x: () => `-${totalWidth - window.innerWidth}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: () => `+=${totalWidth}px`,
                scrub: 1,
                pin: true,
            },
        });

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <section className="section blue">Scroll down to animate horizontally &gt;</section>
            <section className="section red">Red Section</section>
            <section className="section gray">Gray Section</section>
            <section className="section purple">Purple Section</section>
            <section className="section green">Green Section</section>
        </div>
    );
}
