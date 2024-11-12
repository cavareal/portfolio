import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import React from 'react';
import BigTitle from "./BigTitle.js";
import Projects from "../organisms/Projects.js";
import Carousel from "../organisms/Carousel.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Layers() {

    //Layers

    const main = useRef();
    const scrollTween = useRef();
    let isScrolling = false;

    const { contextSafe } = useGSAP(
        () => {
            const panels = gsap.utils.toArray('.panel');

            // Créer un ScrollTrigger pour chaque panel essai pour gérer le défilement lors qu'on le met avec les croll horizontal
            // panels.forEach((panel, i) => {
            //     ScrollTrigger.create({
            //         trigger: panel,
            //         start: 'top center', // Déclenche au centre de l'écran
            //         end: 'bottom top',   // Fin du trigger avant de quitter l'écran
            //         onEnter: () => goToSection(i),
            //         onEnterBack: () => goToSection(i),
            //         markers: false,
            //         scrub: 0.5, // Durée d'animation pour une transition fluide
            //     });
            // });

            panels.forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: 'top bottom',
                    end: '+=200%',
                    onToggle: (self) => {
                        if (self.isActive && !isScrolling) {
                            goToSection(i);
                        }
                    },
                    id: 'panel-' + i,
                    markers: false,
                });
            });
            ScrollTrigger.create({
                start: 0,
                end: 'max',
                snap: 1 / (panels.length - 1),
            });
        },
        { scope: main }
    );

    const goToSection = contextSafe((i) => {
        if (scrollTween.current) return; // Empêche d'appeler plusieurs fois
        isScrolling = true; // Début du scroll

        scrollTween.current = gsap.to(window, {
            scrollTo: { y: i * window.innerHeight, autoKill: true },
            duration: 1,
            id: 'scrollTween',
            ease: "power1.out",
            onComplete: () => {
                scrollTween.current = null;
                isScrolling = false; // Fin du scroll
            },
            overwrite: 'auto', // true ?
        });
    });

    return (
        <main ref={main}>
            <section className="description panel light">
                <BigTitle/>
            </section>
            <section className="panel one">Des technos...</section>
            <section className="panel two">
                <Carousel/>
            </section>
            <section className="panel three">.. des </section>
            <section className="panel four">... Des</section>
        </main>
    );
}