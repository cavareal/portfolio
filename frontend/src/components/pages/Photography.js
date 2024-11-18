import React from 'react';
import Header from "../molecules/Header.js";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother} from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Photography() {

    useGSAP(() => {
        let skewSetter = gsap.quickTo("img", "skewY"), // fast
            clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

        ScrollSmoother.create({
            wrapper: "#wrapper",
            content: "#content",
            smooth: 2,
            speed: 3,
            effects: true,
            onUpdate: self => skewSetter(clamp(self.getVelocity() / -50)),
            onStop: () => skewSetter(0)
        });
    });

    return (
        <div>
            <Header/>
            <div className="text">Scrolly Images</div>
            <div aria-hidden="true" className="text outline-text">Scrolly Images</div>
            <div aria-hidden="true" className="text filter-text">Scrolly Images</div>

            <div id="wrapper">
                <section id="content">
                    <section className="images">
                        <img data-speed="0.8"
                             src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                             alt=""/>
                        <img data-speed="0.9"
                             src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                             alt=""/>
                        <img data-speed="1"
                             src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                             alt=""/>
                        <img data-speed="1.1"
                             src="https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80"
                             alt=""/>
                        <img data-speed="0.9"
                             src="https://images.unsplash.com/photo-1514689832698-319d3bcac5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80"
                             alt=""/>
                        <img data-speed="1.2"
                             src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                             alt=""/>
                        <img data-speed="0.8"
                             src="https://images.unsplash.com/photo-1588007375246-3ee823ef4851?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                             alt=""/>
                        <img data-speed="1" src="https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                             alt=""/>
                    </section>
                </section>
            </div>
        </div>
    );
} export default Photography;
