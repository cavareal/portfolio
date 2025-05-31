import React from 'react';
import Header from "../molecules/Header.js";
import Head from "../molecules/Head.js";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import rocketAnimation from '/public/rocket_animation.json';
import planet from '/public/planete_01.png';
import red_planet from '/src/assets/illustrations/red_planet.png';

function Home2 (){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Simule un chargement
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    return (
        <div>
            {/*<div className="min-h-screen border-8 border-black p-10 sm:p-12 box-border flex items-center">*/}
            {/*    <div className="text-left">*/}
            {/*        <h1 className="text-4xl sm:text-5xl font-bold">*/}
            {/*            Hi,*/}
            {/*        </h1>*/}
            {/*        <h1 className="text-4xl sm:text-5xl font-bold mb-36">*/}
            {/*            I’m <span className="text-indigo-600">Alice</span>*/}
            {/*        </h1>*/}
            {/*        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-right bottom-0 right-0 ml-[35vw] sm:ml-[20vw]">*/}
            {/*            I'm a passionate web & mobile developer, curious about creative design and interactive*/}
            {/*            interfaces.*/}
            {/*            I love building experiences that are both beautiful and user-friendly. Let’s create something*/}
            {/*            amazing together!*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="h-screen w-screen bg-bg-milkyway">
                <Head/>
                <AnimatePresence>
                    {loading ? null : (
                        <motion.div
                            key="main"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8, delay: 1}}
                        >
                            <Header/>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex items-center justify-center h-full">
                    <AnimatePresence>
                        {loading ? (
                            <motion.div
                                key="loader"
                                initial={{opacity: 1}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.8}}
                                className="flex flex-col items-center"
                            >
                                <Lottie animationData={rocketAnimation} loop autoplay className="w-75 h-75"/>
                                <p className="mt-4 text-lg animate-pulse">Décollage imminent...</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="main"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.8, delay: 1}}
                            >
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute w-full h-[30rem] top-0 overflow-hidden font-milkyway text-[20rem]">
                                        <div style={{
                                            WebkitTextStroke: '2px white',
                                            color: 'transparent',
                                                }}
                                            className=" relative inline-block whitespace-nowrap ">
                                            <span className="inline-block animate-defilement"> &#32; Bienvenue Dans l&#39;Espace ! </span>
                                            <span className="inline-block animate-defilement2 absolute left-0 top-0"> &#32; Bienvenue Dans l&#39;Espace! </span>
                                        </div>
                                        {/*<h1 className="font-milkyway text-black whitespace-nowrap text-[20rem] animate-scroll-left [text-shadow:_0_0_4px_white,_0_0_4px_white]">*/}
                                        {/*    Bienvenue Dans l Espace*/}
                                        {/*</h1>*/}
                                    </div>
                                </div>

                                <div className="min-h-screen flex items-end justify-center -mb-[100rem]">
                                    <img
                                        src={planet}
                                        alt="Image en rotation"
                                        className="w-[105rem] h-[105rem] animate-spin"
                                        style={{
                                            animationDuration: '80s',
                                            animationTimingFunction: 'linear',
                                            animationIterationCount: 'infinite'
                                        }}
                                        />
                                    </div>
                            </motion.div>
                            )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
)
}

export default Home2;