import React from 'react';
import Header from "../molecules/Header.js";
import Head from "../molecules/Head.js";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import rocketAnimation from '/public/rocket_animation.json';
import planet from '/public/planete_01.png';

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
            <div className="h-screen w-screen bg-black text-white">
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
                                {/*<h1 className="text-3xl font-bold">Bienvenue dans l'espace 🚀</h1>*/}
                                {/*<img src={planet} alt="planète" className="w-[70rem] h-[70rem]"/>*/}
                                {/*<div className="absolute w-full h-full pointer-events-none">*/}
                                {/*    <div*/}
                                {/*        className="absolute bottom-[-50%] left-1/2 origin-[center_200vh] animate-[spin_20s_linear_infinite]">*/}
                                {/*        <img src={planet} alt="planète" className="w-[70rem] h-[70rem]"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className="absolute left-1/2 top-1/2 w-0 h-0 transform -translate-x-1/2">*/}
                                {/*    <div className="relative origin-[center_200vh] animate-[spin_20s_linear_infinite]">*/}
                                {/*        <img*/}
                                {/*            src={planet}*/}
                                {/*            alt="planète"*/}
                                {/*            className="w-[70rem] h-[70rem]"*/}
                                {/*        />*/}
                                {/*    </div>*/}
                                {/*    </div>*/}

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