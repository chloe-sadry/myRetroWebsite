import React, {useEffect, useState} from 'react'
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import AnimBallonBoom from '../img/anim-ballon-boom.png'
import AnimPenny from '../img/anim-penny.png'


function GalleryArt() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return (
    <>
        <section className='section-draw' style={{ transform: `translateY(-${offsetY * 0.07}px)` }} >
            <ImageSlider slides={SliderData} />
            <div className='box-penny'>
                <div className='box-ballon'>
                  <h3>Et aussi ça (pennywise):</h3>
                  <img src={AnimBallonBoom} alt='' className='anim-ballon-boom' />
                </div>
                <div className='background-penny'>
                  <img src={AnimPenny} alt='' className='anim-penny' />
                  <p> (Ahahah) ...</p>
                </div>
            </div>
        </section>

    </>
)
        }

export default GalleryArt;