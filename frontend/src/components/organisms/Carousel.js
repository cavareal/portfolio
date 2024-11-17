import React, { useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import tauriLaptop from '/public/tauriLaptop.png'
import ePlants from '/public/ePlants.png'
import cycleseo from '/public/cycleseo.png'
import fallingBlox from '/public/fallingBlox.png'
import aventuriersDuRail from '/public/aventuriersDuRail.png'
import portfolio from '/public/premierPortfolioPhoto.png'
import sum from '/public/text-summerization.png'
import spring from '/public/spring-logo.png'
import tailwind from '/public/tailwind-logo.png'
import cicd from '/public/ci-cd-logo.png'
import typescript from '/public/Typescript-icon.png'
import react from '/public/React-icon.png'
import kotlin from '/public/kotlin-logo.png'
import jetpack from '/public/jetpack-compose-logo.png'
import java from '/public/java-icon.png'
import javaSwing from '/public/java-swing.png'
import html from '/public/html-icon.png'
import css  from '/public/css-icon.png'
import mariadb from '/public/mariadb-logo.png'
import vue from '/public/Vue-logo.png'
import python from '/public/python-logo.png'
import spacy from '/public/SpaCy-logo.png'
import jupyter from '/public/jupyter-logo.png'
import room from '/public/room-logo.png'


const Carousel = () => {
    const mockItems = [
        {
            id: 'item-1',
            title: 'Site web de Gestion de projet',
            image: tauriLaptop,
            type : 'laptop',
            description: "Java Spring, TailwindCSS, TypeScript, GitLab CI/CD",
            techno: [spring,vue, tailwind, typescript, mariadb, cicd]
        },
        {
            id: 'item-2',
            title: 'Site e-commerce',
            image: ePlants,
            type : 'laptop',
            description: "Site en React, TailwindCSS, Express",
            techno: [react, tailwind, mariadb]
        },
        {
            id: 'item-3',
            title: 'Application Android',
            image: cycleseo,
            type : 'phone',
            description: "App pour vélomobile en Kotlin et jetpack compose",
            techno: [kotlin, jetpack, room, cicd]
        },
        {
            id: 'item-4',
            title: 'Jeu Falling Blox',
            image: fallingBlox,
            type : 'laptop',
            description: "Jeu Falling Blox en Java et JavaSwing",
            techno : [java, javaSwing]
        },
        {
            id: 'item-5',
            title: 'Jeu Les Aventuriers du Rail',
            image: aventuriersDuRail,
            type : 'laptop',
            description: "Jeu Les Aventuriers du Rail en Java et JavaSwing",
            techno: [java, javaSwing]
        },
        {
            id: 'item-6',
            title: 'Portfolio',
            image: portfolio,
            type : 'laptop',
            description: "Portfolio réalisé en HTML/CSS",
            techno: [html, css]
        },
        {
            id: 'item-7',
            title: 'Résumé de texte automatique',
            image: sum,
            type : 'laptop',
            description: "Résumé de texte automatique en python",
            techno: [python, jupyter, spacy]
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: 3, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`grid aspect-[1.1] rounded w-full place-items-center text-white transition-all duration-700 ${currentSlide === item.id
                            ? 'z-10 scale-150 bg-yellow-600'
                            : 'bg-violet-500'
                        }`}>
                        {<div className="subSubTitle mt-1">{item.title}</div>}
                        {<img
                            src={item.image}
                            alt={item.title}
                            className={`w-auto h-3/4 ${item.type === 'laptop' ? 'w-auto h-5/6' : 'w-auto h-auto'}`}
                        />}
                        {/*{<div className="text-sm p">{item.description}</div>}*/}
                        <div className="flex flex-row justify-center gap-1 bg-gray-200 bg-opacity-20 rounded mb-3 p-1">
                            {item.techno.map((techno) => {
                                return <img src={techno} alt="techno" className="w-auto h-10"/>
                            })}
                        </div>
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })

    return (
        <div className="">
            <div className={"text-4xl text-center mb-1 subTitle"}>Projets</div>
            <div className="py-10 relative justify-center">
                <button onClick={slideToPrevItem}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[17%]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                    </svg>
                </button>
                <div className="mx-auto w-[65%] overflow-x-clip py-[4%] relative">
                    {carouselFragment}
                </div>
                <button onClick={slideToNextItem}
                        className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[17%]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Carousel
