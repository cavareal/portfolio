import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './test.css';
import React from 'react';
import {useGSAP} from "@gsap/react";

function Test() {
    const container = useRef();
    const circle = useRef();

    useEffect(() => {
        // Animation sur les éléments avec classe .box
        gsap.to(".box", { rotation: "+=360", duration: 3 });

        // Animation sur l'élément référencé circle
        if (circle.current) {
            gsap.to(circle.current, { rotation: "-=360", duration: 3 });
        }
    }, []);

    const { contextSafe } = useGSAP();

    // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
    const onEnter = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, { rotation: "+=360" });
    });

    return (
        <div className="App">
            <div ref={container} className="container">
                <div className="box gradient-blue">selector</div>
                <div className="circle gradient-green" ref={circle}>
                    Ref
                </div>
            </div>
            <div className="box gradient-blue">selector</div>
            <div className="app flex-row">
                <div className="box2 gradient-blue" onClick={onEnter}>
                    Click Me
                </div>
            </div>
        </div>
    );
}

export default Test;
