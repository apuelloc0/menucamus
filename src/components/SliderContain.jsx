import React, { useState, useEffect } from 'react';
import '../cssfolder/SliderContain.css';
import numero1 from "../icons/bannercoronitas.webp";
import numero2 from "../icons/vino4.webp";
import numero3 from "../icons/bannertrago.webp";

const SliderContain = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { src: numero1, alt: 'Imagen 1' },
        { src: numero2, alt: 'Imagen 2' },
        { src: numero3, alt: 'Imagen 3' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const setSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slider">
            <div className="slides">
                {slides.map((slide, index) => (
                    <div
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={slide.src} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <div className="navigation">
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
            <div className="indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default SliderContain;



// import '../cssfolder/SliderContain.css';
// import numero1 from "../icons/pexel1.webp";
// import numero2 from "../icons/pexel2.webp";
// import numero3 from "../icons/pexel3.webp";

{/* <div className="slide">
                    <img src={numero1} alt="Imagen 1" />
                </div>
                <div className="slide">
                    <img src={numero2} alt="Imagen 2" />
                </div>
                <div className="slide">
                    <img src={numero3} alt="Imagen 3" />
                </div> */}