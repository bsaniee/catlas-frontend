import React, { useState } from 'react'
import { SliderData } from './SliderData';
import { CgChevronRightO } from "react-icons/cg"
import { CgChevronLeftO } from "react-icons/cg"

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <CgChevronLeftO  id="left-arrow" onClick={prevSlide} />
      <CgChevronRightO id="right-arrow" onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
          <div 
          className={index === current ? "slide active" : "slide"}
          key={index}
          >
            {index === current && (
            <img src={slide.image} alt="carousel image" className="image" />
            )}
          </div>
        )
      })}
    </section>
  )
};

export default ImageSlider
