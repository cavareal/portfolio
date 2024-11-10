import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './Project.css';

gsap.registerPlugin(ScrollTrigger);

const YourComponent = () => {
    const containerRef = useRef(null);
    const pinWrapRef = useRef(null);

    useEffect(() => {
        const pageContainer = containerRef.current;

        // Initialize Locomotive Scroll
        const scroller = new LocomotiveScroll({
            el: pageContainer,
            smooth: true
        });

        // Update ScrollTrigger on scroll
        scroller.on('scroll', ScrollTrigger.update);

        // Configure ScrollTrigger proxy for Locomotive Scroll
        ScrollTrigger.scrollerProxy(pageContainer, {
            scrollTop(value) {
                return arguments.length
                    ? scroller.scrollTo(value, {duration: 0, disableLerp: true})
                    : scroller.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: pageContainer.style.transform ? 'transform' : 'fixed'
        });

        // Horizontal scroll setup within sectionPin
        const pinWrap = pinWrapRef.current;

        if (pinWrap) {
            const pinWrapWidth = pinWrap.offsetWidth;
            const horizontalScrollLength = pinWrapWidth - window.innerWidth;

            // Horizontal scrolling and pinning with ScrollTrigger
            gsap.to(pinWrap, {
                scrollTrigger: {
                    scroller: pageContainer, // Specify LocomotiveScroll's container
                    scrub: true,
                    trigger: '#sectionPin',
                    pin: true,
                    start: 'top top',
                    end: () => `+=${pinWrapWidth}`, // Ensures pinning until the horizontal scroll completes
                },
                x: -horizontalScrollLength,
                ease: 'none'
            });

            ScrollTrigger.addEventListener('refresh', () => scroller.update());
            ScrollTrigger.refresh();
        } else {
            console.warn("pinWrap is not defined");
        }

        // Cleanup on component unmount
        return () => {
            scroller.destroy();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="container" ref={containerRef}>
            <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
                <div>
                    <h1 data-scroll data-scroll-speed="1">
                        <span>Horizontal</span> <span>scroll</span> <span>section</span>
                    </h1>
                    <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
                        with GSAP ScrollTrigger & Locomotive Scroll
                    </p>
                </div>
            </section>

            <section id="sectionPin">
                <div className="pin-wrap" ref={pinWrapRef}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
                    <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
                    <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="" />
                </div>
            </section>

            <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
                <img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <h2 data-scroll data-scroll-speed="1" className="credit">
                    <a href="https://thisisadvantage.com" target="_blank" rel="noopener noreferrer">Made by Advantage</a>
                </h2>
            </section>
        </div>
    );
};

export default YourComponent;
