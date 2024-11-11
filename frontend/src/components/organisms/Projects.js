import React from 'react';
import { useSpringCarousel } from 'react-spring-carousel'


function Projects() {
    const {
        carouselFragment,
        thumbsFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        withLoop: true,
        withThumbs: true,
        items: mockedItems.map((i) => ({
            id: i.id,
            renderItem: (
                <CarouselItem color={i.color}>
                    {i.title}
                </CarouselItem>
            ),
            renderThumb: (
                <CarouselThumb color={i.color}>
                    {i.title}
                </CarouselThumb>
            )
        })),
    });

    return (
        <div>
            <button onClick={slideToPrevItem}>Prev item</button>
            {carouselFragment}
            <button onClick={slideToNextItem}>Next item</button>
            <div>{thumbsFragment}</div>
        </div>
    );
} export default Projects;