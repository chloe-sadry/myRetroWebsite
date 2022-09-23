import React, {useEffect, useState} from 'react'
import Person from './Person';
import PersonHobbies from './PersonHobbies';
import AnimMe from '../img/Anim_Finale_Violet.png'
import AnimNes from '../img/Anim_Nes.png'
import AnimTravel from '../img/anim_travel.png'


function Presentation() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

return(
<>
    <section className="presentation"  style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>
        
        <div className="mid-content">

            <section className='anim-speech'>
                    <div className='box-anim'>
                        <img src={AnimMe} alt='' className='anim-me' />
                    </div>
                    <Person/>
            </section>

            <div className="description-content">
                <div className="speech-text-description">
                    <p className="first-text-description">
                        Je dessine et développe
                    </p>
                    <div className='box-speech-anim'>
                        <p className="second-speech-description">J'aime particulièrement <span>les technologies,</span> surtout les consoles rétro dans ce style là :
                        <br/>
                        Mais également les nouvelles ^-^
                        </p>

                        <img src={AnimNes} alt='' className='anim-nes' />
                    </div>
                        <div>
                        <PersonHobbies/>
                        </div>
                    <div>
                        <p className="third-speech-description">J’aimerais beaucoup plus voyager, ma prochaine destination :</p>
                        <img src={AnimTravel} alt='' className='anim-travel' />
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</>
)
        }

export default Presentation