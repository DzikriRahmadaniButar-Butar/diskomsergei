import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, image: 'src/assets/slideshow/slide1.png' },
  { id: 2, image: 'src/assets/slideshow/slide2.png' },
  { id: 3, image: 'src/assets/slideshow/slide3.jpg' },
  { id: 4, image: 'src/assets/slideshow/slide4.jpg' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const slideshowRef = useRef(null);

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentSlide === 0) {
      setCurrentSlide(slides.length);
      slideshowRef.current.style.transition = 'none';
      slideshowRef.current.style.transform = `translateX(-${slides.length * 80}%)`;
    } else if (currentSlide === slides.length + 1) {
      setCurrentSlide(1);
      slideshowRef.current.style.transition = 'none';
      slideshowRef.current.style.transform = `translateX(-80%)`;
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAnimating) {
      slideshowRef.current.style.transition = 'transform 0.6s ease-in-out';
    }
    slideshowRef.current.style.transform = `translateX(-${currentSlide * 80}%)`;
  }, [currentSlide, isAnimating]);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={slideshowRef}
        className="flex"
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateX(-80%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-[80%] flex-shrink-0 px-2">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Navigasi Kiri dan Kanan */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-200 text-blue-800 p-2 rounded-full shadow-md hover:bg-blue-300 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-200 text-blue-800 p-2 rounded-full shadow-md hover:bg-blue-300 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indikator Bulat */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={`w-4 h-4 rounded-full border-2 ${
              currentSlide === index + 1
                ? 'bg-blue-500 border-blue-500'
                : 'border-blue-500 bg-transparent'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
