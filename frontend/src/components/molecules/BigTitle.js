import React, {useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';



function BigTitle() {

    const titleRef = useRef(null);

    useEffect(() => {
        const letters = titleRef.current.textContent.split("");
        titleRef.current.innerHTML = ""; // Nettoyer le contenu initial

        letters.forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.display = "inline-block";
            titleRef.current.appendChild(span);
        });

        gsap.fromTo(
            titleRef.current.children,
            { y: 50, opacity: 0 }, // Valeurs initiales
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.05, // Délai entre chaque lettre
            }
        );
    }, []);

    return (
        <div>
            <h1 ref={titleRef} className="headline">Portfolio</h1>
            <h2 className={"subBigTitle"}>Par Cavareal</h2>
            <div className="scroll-down">
                Scroll down
                <div className="arrow"></div>
            </div>
        </div>
    );

}

export default BigTitle;