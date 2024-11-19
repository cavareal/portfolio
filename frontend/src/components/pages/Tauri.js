import React, {useEffect, useRef} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../molecules/Header';
import logo from '/public/tauri-logo.svg';
import tauriLaptop from "/public/tauriLaptop.png";
import ipadTauri from '/src/assets/tauri/ipadTauri.png';

gsap.registerPlugin(ScrollTrigger);

function Tauri() {

    const sectionRef = useRef(null);
    const image1Ref = useRef(null); // Image de fond
    const image2Ref = useRef(null); // Image au-dessus
    const rowRefs = useRef([]); // Références pour les sections Pin


    useEffect(() => {
        // Animation pour l'image de fond (bouge moins)
        gsap.to(image1Ref.current, {
            yPercent: 220, // Déplacement plus faible
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom", // Commence quand la section entre dans la vue
                end: "bottom top",   // Se termine quand la section sort de la vue
                scrub: true,         // Synchronisation fluide avec le scroll
            },
        });

        // Animation pour l'image au-dessus (bouge plus)
        gsap.to(image2Ref.current, {
            yPercent: -10, // Déplacement plus important
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        // Empilement des titres avec épinglage
        rowRefs.current.forEach((row, index) => {
            const nextRow = rowRefs.current[index + 1] ;

            ScrollTrigger.create({
                trigger: row,
                start: 'top top',
                endTrigger: nextRow || null, // Si nextRow est null, pas d'endTrigger
                end: nextRow ? 'top top' : 'bottom top', // Si pas de nextRow, l'animation se termine à la fin de la dernière ligne
                pin: row.querySelector('.left'),
                pinSpacing: false,
                markers: false,
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

    }, []);

    return (
        <div>
            <Header/>

            {/* Section avec Parallax */}
            <div
                ref={sectionRef}
                style={{height: "100vh", overflow: "hidden", position: "relative"}}
            >
                <div
                    ref={image1Ref}
                    className="absolute top-[-46rem] left-0 right-0 flex justify-center items-center z-[1]"
                >
                    <div className="titleTauri text-center">TAURI</div>
                </div>

                {/* Image au-dessus */}
                <div
                    ref={image2Ref}
                    className="absolute flex justify-center top-[25%] w-full h-[150%] z-[4]"
                >
                    <img src={ipadTauri} alt="Tauri Laptop" className=""/>
                </div>
            </div>

            {/* Section 3 */}
            <div className="row-wrap">
                <div className="row mt-6" ref={(el) => (rowRefs.current[1] = el)}>
                    <div className="left">
                        <div className={"titleOK"}>Introduction</div>
                    </div>
                    <div className="right">
                        <div className="right">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not
                            only five centuries, but also the leap into electronic typesetting, remaining
                            essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem
                            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal
                            distribution of letters, as opposed to using 'Content here, content here', making it
                            look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem
                            Ipsum as
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites
                            still in
                            their infancy. Various versions have evolved over the years, sometimes by accident,
                            sometimes on
                            purpose (injected humour and the like).
                        </div>
                    </div>
                </div>
                <div className={"row mb-16"} ref={(el) => (rowRefs.current[3] = el)}></div>
                <div className="row" ref={(el) => (rowRefs.current[4] = el)}>
                    <div className="left">
                        <div className={"titleOK"}>Méthode Agile</div>
                    </div>
                    <div className="right">
                        <div className="right">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not
                            only five centuries, but also the leap into electronic typesetting, remaining
                            essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem
                            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal
                            distribution of letters, as opposed to using 'Content here, content here', making it
                            look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem
                            Ipsum as
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites
                            still in
                            their infancy. Various versions have evolved over the years, sometimes by accident,
                            sometimes on
                            purpose (injected humour and the like).
                        </div>
                    </div>
                </div>
                <div className={"row mb-16"} ref={(el) => (rowRefs.current[5] = el)}></div>
                <div className="row" ref={(el) => (rowRefs.current[6] = el)}>
                    <div className="left">
                        <div className={"titleOK"}>Architecture</div>
                    </div>
                    <div className="right">
                        <div className="right">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not
                            only five centuries, but also the leap into electronic typesetting, remaining
                            essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem
                            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal
                            distribution of letters, as opposed to using 'Content here, content here', making it
                            look like
                            readable English. Many desktop publishing packages and web page editors now use Lorem
                            Ipsum as
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites
                            still in
                            their infancy. Various versions have evolved over the years, sometimes by accident,
                            sometimes on
                            purpose (injected humour and the like).
                        </div>
                    </div>
                </div>
                <div className="row mb-16" ref={(el) => (rowRefs.current[7] = el)}></div>
                {/*nécéssaire pour arreter le titre*/}
            </div>
            <div style={{backgroundColor: 'grey', height: '100vh'}}></div>
            <div style={{backgroundColor: 'grey', height: '100vh'}}></div>
        </div>
    );
}

export default Tauri;
