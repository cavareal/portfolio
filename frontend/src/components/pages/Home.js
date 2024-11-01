import React, {useRef} from 'react';
import Header from "../molecules/Header.js";
import { useEffect } from 'react';
import gsap from 'gsap';
import './Home.css';

function Home (){
    // const el = document.querySelector("h1");
    // const trigger = document.querySelector(".trigger");
    const h1Ref = useRef();
    const triggerRef = useRef();

    useEffect(() => {
        gsap.to(h1Ref.current, {
            rotation: "+=360",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top center", // déclenchement à l'entrée du centre de l'écran
                end: "bottom top",   // fin de l'animation en quittant le haut de l'écran
                toggleActions: "restart none none none", // Relance l'animation à chaque déclencheur
                scrub: true // Synchronise l'animation avec le défilement pour un effet fluide
            }
        });
    }, []);

    return (
        <div>
            <Header/>
            <div className="section"></div>
            <div className="wrapper">
                <div className="sticky">
                    <div ref={triggerRef} className="trigger">
                        <h1 ref={h1Ref} className="h1">Bonjour !</h1>
                    </div>
                </div>
            </div>
            <div className="section"></div>
        </div>
    )
}

export default Home;