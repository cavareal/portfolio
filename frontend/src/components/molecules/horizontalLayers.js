import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
    const containerRef = useRef();

    useGSAP(() => {
        const sections = gsap.utils.toArray('.section');
        const totalWidth = sections.length * window.innerWidth;

        // Animation de défilement horizontal liée au défilement vertical
        const horizontalScroll = gsap.to(containerRef.current, {
            x: () => `-${totalWidth - window.innerWidth}px`,
            ease: 'none',
        });

        ScrollTrigger.create({
            animation: horizontalScroll,
            trigger: containerRef.current,
            start: 'top top',
            end: () => `+=${totalWidth}px`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            markers: false,
        });

        return () => {
            horizontalScroll.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []
    );


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
