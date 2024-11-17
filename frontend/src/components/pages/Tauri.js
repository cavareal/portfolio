import React, {useEffect, useRef} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../molecules/Header';
import logo from '/public/tauri-logo.svg';
import tauriLaptop from "/public/tauriLaptop.png";


gsap.registerPlugin(ScrollTrigger);

function Tauri() {

    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            yPercent: -20, // L'image se déplace plus lentement que le texte
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom", // Commence quand la section entre dans la vue
                end: "bottom top",   // Se termine quand la section sort de la vue
                scrub: true,         // Synchronisé avec le scroll
            },
        });
    }, []);

    return (
        <div>
            <Header/>
            <div style={{height: "100vh", backgroundColor: "#333", color: "#fff"}}>
                <div style={{padding: "40vh 0", textAlign: "center"}}>Welcome</div>
            </div>

            {/* Section avec Parallax */}
            <div
                ref={sectionRef}
                style={{height: "100vh", overflow: "hidden", position: "relative"}}
            >
                <div
                    ref={imageRef}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "120%", // Plus grand pour un effet de parallaxe
                    }}
                >
                    <img src={logo} alt="Tauri Laptop" className="w-full h-full"/>
                </div>
                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        color: "#fff",
                        textAlign: "center",
                        paddingTop: "40vh",
                        fontSize: "2rem",
                    }}
                >
                    <div>Parallax Effect</div>
                    <div>Scroll down to see the magic!</div>
                </div>
            </div>

            {/* Section 3 */}
            <div style={{height: "100vh", backgroundColor: "#444", color: "#fff"}}>
                <h1 style={{padding: "40vh 0", textAlign: "center"}}>End of Page</h1>
            </div>
        </div>
    );
}

export default Tauri;
