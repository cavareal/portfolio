import React, { useRef } from 'react';
import Header from "../molecules/Header.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap-trial/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: "none" });

function About() {
    const mainRef = useRef();

    useGSAP(() => {
        // Définition de l'animation des pulses
        const pulses = gsap.timeline({
            defaults: {
                duration: 0.05,
                autoAlpha: 1,
                scale: 2,
                transformOrigin: 'center',
                ease: "elastic(2.5, 1)"
            }
        })
            .to(".ball02, .text01", {}, 0.2)
            .to(".ball03, .text02", {}, 0.33)
            .to(".ball04, .text03", {}, 0.46);

        // Timeline principale pour le scroll
        const mainTimeline = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: "#svg-stage",
                scrub: true,
                start: "top center",
                end: "bottom center",
                toggleActions: "play none none none",
                onEnter: () => ScrollTrigger.refresh(),
            }
        })
            .to(".ball01", { duration: 0.01, autoAlpha: 1 })
            .fromTo(".theLine",
                { drawSVG: "0%" },     // Start with the line hidden
                { drawSVG: "0% 100%",  // Draw to full length as you scroll down
                    duration: 1
                }
            )
            .to(".ball01", {
                motionPath: {
                    path: ".theLine",
                    align: ".theLine",
                    alignOrigin: [0.5, 0.5]
                }
            }, 0)
            .add(pulses, 0);
    });

    return (
        <div ref={mainRef} className={"bg-gray-800"}>
            <Header />
            <div className="flex ml-10">
                <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200"
                     style={{width: '100%', height: 'auto'}}>
                    <path className="line01 line" d="M 10 200 L 1100 200"></path>
                    <path className="line02 line" d="M 10 400 L 1100 400"></path>
                    <path className="line03 line" d="M 10 600 L 1100 600"></path>
                    <path className="line04 line" d="M 10 800 L 1100 800"></path>
                    <path className="line05 line" d="M 10 1000 L 1100 1000"></path>

                    <text className="text01 subSubTitle" x="30" y="190">2025</text>
                    <text className="text02 subSubTitle" x="30" y="390">2022</text>
                    <text className="text03 subSubTitle" x="30" y="590">2020</text>

                    <text className="text01 area" x="480" y="250">Ecole d'ingénieur ESEO, option Logiciel et données
                    </text>
                    <text className="text02 area" x="420" y="450">Prépa MPSI/PSI</text>
                    <text className="text03 area" x="410" y="650">Bac S</text>

                    <path className="theLine" style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))' }}
                          d="M 0,0 Q 450 230 300 450 T 130 750 Q 100 850 300 1000 T 150 1200"
                          fill="none" stroke="white" strokeWidth="10"/>

                    <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
                    <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
                    <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
                    <circle className="ball ball04" r="20" cx="203" cy="601"></circle>
                </svg>


            </div>
        </div>
    );
}

export default About;
