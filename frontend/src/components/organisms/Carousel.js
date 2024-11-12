import React, { useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import tauriLaptop from '/public/tauriLaptop.png'
import ePlants from '/public/ePlants.png'
import cycleseo from '/public/cycleseo.png'
import fallingBlox from '/public/fallingBlox.png'
import aventuriersDuRail from '/public/aventuriersDuRail.png'
import portfolio from '/public/premierPortfolioPhoto.png'

const Carousel = () => {
    const mockItems = [
        {
            id: 'item-1',
            title: 'Site web de Gestion de projet',
            image: tauriLaptop,
            type : 'laptop',
            description: "Java Spring, TailwindCSS, TypeScript, GitLab CI/CD"
        },
        {
            id: 'item-2',
            title: 'Site e-commerce',
            image: ePlants,
            type : 'laptop',
            description: "Site en React, TailwindCSS, Express"
        },
        {
            id: 'item-3',
            title: 'Application Android',
            image: cycleseo,
            type : 'phone',
            description: "App pour vélomobile en Kotlin et jetpack compose"
        },
        {
            id: 'item-4',
            title: 'Jeu Falling Blox',
            image: fallingBlox,
            type : 'laptop',
            description: "Jeu Falling Blox en Java et JavaSwing"
        },
        {
            id: 'item-5',
            title: 'Jeu Les Aventuriers du Rail',
            image: aventuriersDuRail,
            type : 'laptop',
            description: "Jeu Les Aventuriers du Rail en Java et JavaSwing"
        },
        {
            id: 'item-6',
            title: 'Portfolio',
            image: portfolio,
            type : 'laptop',
            description: "Portfolio réalisé en HTML/CSS"
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
                        className={`grid aspect-[1.1] w-full place-items-center text-white transition-all duration-700 ${currentSlide === item.id
                            ? 'z-10 scale-150 bg-yellow-600'
                            : 'bg-violet-500'
                        }`}>
                        {<div className="subSubTitle">{item.title}</div>}
                        {<img
                            src={item.image}
                            alt={item.title}
                            className={`w-auto h-3/4 ${item.type === 'laptop' ? 'w-auto h-5/6' : 'w-auto h-auto'}`}
                        />}
                        {<div className="text-sm p">{item.description}</div>}
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
