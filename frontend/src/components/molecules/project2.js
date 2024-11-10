import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./project2.css"; // Ajoutez ici les styles CSS pour le layout et les sections

gsap.registerPlugin(ScrollTrigger);

function ScrollAnimation() {
    const mainScrollbarRef = useRef(null);
    const horizontalSectionsRef = useRef([]);
    const pinWrapRefs = useRef([]);
    const animWrapRefs = useRef([]);

    useEffect(() => {
        // Initialisation du scrollbar et intégration avec ScrollTrigger
        let bodyScrollBar = Scrollbar.init(mainScrollbarRef.current, { damping: 0.1, delegateTo: document });
        bodyScrollBar.setPosition(0, 0);
        bodyScrollBar.track.xAxis.element.remove();

        ScrollTrigger.scrollerProxy(mainScrollbarRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });

        bodyScrollBar.addListener(ScrollTrigger.update);

        horizontalSectionsRef.current.forEach((sec, index) => {
            const thisPinWrap = pinWrapRefs.current[index];
            const thisAnimWrap = animWrapRefs.current[index];

            const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

            gsap.fromTo(
                thisAnimWrap,
                {
                    x: () => (thisAnimWrap.classList.contains("to-right") ? 0 : getToValue())
                },
                {
                    x: () => (thisAnimWrap.classList.contains("to-right") ? getToValue() : 0),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sec,
                        scroller: mainScrollbarRef.current,
                        pinType: "transform",
                        start: "top top",
                        end: () => `+=${thisAnimWrap.scrollWidth}`,
                        pin: thisPinWrap,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                        scrub: true,
                        //markers: true, // Activer si vous souhaitez voir les marqueurs
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            bodyScrollBar.destroy();
        };
    }, []);

    return (
        <div id="main-scrollbar" ref={mainScrollbarRef}>

            <section className="blank">
                <h1>ScrollTrigger and smooth-scrollbar demo</h1>
                <p>...</p>
            </section>

            {Array(4).fill(0).map((_, i) => (
                <section
                    key={i}
                    className="horizontal"
                    ref={el => horizontalSectionsRef.current[i] = el}
                >
                    <div className="pin-wrap" ref={el => pinWrapRefs.current[i] = el}>
                        <div className="animation-wrap to-right" ref={el => animWrapRefs.current[i] = el}>
                            {/* Contenu des items */}
                            {Array(10).fill(0).map((_, j) => (
                                <div key={j} className="item">
                                    Contenu de l'item {j + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section className="blank">
                <h1>...little laggy, isn't it?</h1>
                <p>...</p>
            </section>
        </div>
    );
}

export default ScrollAnimation;
