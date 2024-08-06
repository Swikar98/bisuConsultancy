import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Carousel.css'; 
import image1 from '../../../image/about/about1.jpg';
import image2 from '../../../image/about/SERVICEjpg.jpg';
import image3 from '../../../image/about/contact.jpg';

const items = [
    {
        src: image1,
        title: 'Sturdy in Austrialia',
        name: 'Name 1',
        description: 'Description 1'
    },
    {
        src: image2,
        title: 'Title 2',
        name: 'Name 2',
        description: 'Description 2'
    },
    {
        src: image3,
        title: 'Title 3',
        name: 'Name 3',
        description: 'Description 3'
    },
];

const Carousel = () => {
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const carouselRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);

    const [runTimeout, setRunTimeout] = useState(null);
    const [runNextAuto, setRunNextAuto] = useState(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const resetTimeAnimation = () => {
        const runningTime = runningTimeRef.current;
        runningTime.style.animation = 'none';
        runningTime.offsetHeight; // trigger reflow
        runningTime.style.animation = null;
        runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    const showSlider = (type) => {
        const sliderItems = listRef.current.querySelectorAll('.item');
        if (type === 'next') {
            listRef.current.appendChild(sliderItems[0]);
            carouselRef.current.classList.add('next');
        } else {
            listRef.current.prepend(sliderItems[sliderItems.length - 1]);
            carouselRef.current.classList.add('prev');
        }

        clearTimeout(runTimeout);
        setRunTimeout(setTimeout(() => {
            carouselRef.current.classList.remove('next');
            carouselRef.current.classList.remove('prev');
        }, timeRunning));

        clearTimeout(runNextAuto);
        setRunNextAuto(setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext));

        resetTimeAnimation();
    };

    useEffect(() => {
        resetTimeAnimation();
        setRunNextAuto(setTimeout(() => {
            nextBtnRef.current.click();
        }, timeAutoNext));

        return () => {
            clearTimeout(runTimeout);
            clearTimeout(runNextAuto);
        };
    }, []);

    return (
        <div className="carousel " ref={carouselRef}>
            <div className="list" ref={listRef}>
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <Image 
                            src={item.src} 
                            alt={`Slide ${index + 1}`} 
                            layout="fill" 
                            objectFit="cover" 
                            className="item-image"
                        />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="name">{item.name}</div>
                            <div className="des">{item.description}</div>
                            <div className="btn">
                                <button>Button 1</button>
                                <button>Button 2</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows ">
                <button className="prev" ref={prevBtnRef} onClick={() => showSlider('prev')}>Prev</button>
                <button className="next" ref={nextBtnRef} onClick={() => showSlider('next')}>Next</button>
            </div>
            <div className="timeRunning" ref={runningTimeRef}></div>
        </div>
    );
};

export default Carousel;
