import React, { useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import './test2.css';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function  Test2() {
    const main = useRef();
    const smoother = useRef();

    const scrollTo = () => {
        smoother.current.scrollTo('.box-c', true, 'center center');
    };

    useGSAP(
        () => {
            // create the smooth scroller FIRST!
            smoother.current = ScrollSmoother.create({
                smooth: 2, // seconds it takes to "catch up" to native scroll position
                effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
            });
            ScrollTrigger.create({
                trigger: '.box-c',
                pin: true,
                start: 'center center',
                end: '+=300',
                markers: false,
            });
        },
        { scope: main }
    );

    return (
        <>
            <div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">
                    <header className="header">
                        <h2 className="title">GSAP ScrollSmoother in React</h2>
                        <button className="button" onClick={scrollTo}>
                            Jump to C
                        </button>
                    </header>
                    <div className="box box-a gradient-blue" data-speed="0.5">
                        a
                    </div>
                    <div className="box box-b gradient-orange" data-speed="0.8">
                        b
                    </div>
                    <div className="box box-c gradient-purple" data-speed="1.5">
                        c
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    );
}

export default Test2;
