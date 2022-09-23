import React, {useState} from 'react';
import { SliderData } from './SliderData';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import AnimBallon from '../img/anim-ballon.png'



const ImageSlider = ({ slides }) => {


    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        };
    
        if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
        }

    return (
    
    
        <section className="gallery-art slider">
            <div className="border-animate left-animate">
                <GoArrowLeft className='left-arrow' onClick={prevSlide} />
            </div>
            <div className="border-animate right-animate">
                <GoArrowRight className='right-arrow' onClick={nextSlide} />
            </div>
            <div className="mid-content" slides={SliderData}>
                
                <div className='box-slider'>
                    <h3>J'ai dessiné Ça :</h3>
                    <img src={AnimBallon} alt='' className='anim-ballon' />
                </div>

                <div className="slide-container">
                    {SliderData.map((slide, index) => {
                        return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                            <img src={slide.image} alt='' className='image' />
                            )}
                        </div>
                        );
                    })}
                </div>
            </div>
            
            
            
        </section>
    
    
    );
};

export default ImageSlider;