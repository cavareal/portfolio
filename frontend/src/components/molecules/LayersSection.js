import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import React from 'react';
import BigTitle from "./BigTitle.js";
import HorizontalScroll from "./horizontalMayers.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Layers() {

    //Layers

    const main = useRef();
    const scrollTween = useRef();
    let isScrolling = false;

    const { contextSafe } = useGSAP(
        () => {
            const panels = gsap.utils.toArray('.panel');
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
            <section className="panel one title">Des technos...</section>
            <section className="panel two title">... Des projets</section>
            <section className="panel three title">.. des </section>
            <section className="panel four title">... Des</section>
        </main>
    );
}