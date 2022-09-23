import React from 'react'
import AnimPs from '../img/anim-ps.png'
import AnimAi from '../img/anim-ai.png'
import AnimPro from '../img/Anim-pro.png'
import AnimAffinity from '../img/Anim-affinity.png'



function Career() {



return(
<>
    <section className="career">
        
        <div className="mid-content">
            <div className='skills-container'>
                <h2>Compétences</h2>

                <p>Vous pouvez appuyer sur les lettres en forme de boutons de clavier pour les illuminer !</p>

                <div className='box-skills-graphic'>
                    <section className='skills-graphic'>
                    <img src={AnimPs} alt='' className='anim-ps' />
                        <ul>
                            <li>
                                <input type="checkbox" />
                                <div>P</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>H</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>O</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>T</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>O</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>S</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>H</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>O</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>P</div>
                            </li>
                        </ul>
                        <img src={AnimAi} alt='' className='anim-ai' />
                        <ul className='illustrator'>
                            <li>
                                <input type="checkbox" />
                                <div>I</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>L</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>L</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>U</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>S</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>T</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>R</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>A</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>T</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>O</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>R</div>
                            </li>
                        </ul>
                    </section>

                    <section className='skills-graphic'>
                        <img src={AnimPro} alt='' className='anim-pro' />
                        <ul className='procreate'>
                            <li>
                                <input type="checkbox" />
                                <div>P</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>R</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>O</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>C</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>R</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>E</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>A</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>T</div>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <div>e</div>
                            </li>
                        </ul>
                        <img src={AnimAffinity} alt='' className='anim-affinity' />
                        <span className='affinity-box'>
                            
                            <ul className='affinity'>
                                <li>
                                    <input type="checkbox" />
                                    <div>A</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>F</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>F</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>I</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>N</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>I</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>T</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div id='Y'>Y</div>
                                </li>
                            </ul>
                            <ul className='affinity'>
                                <li>
                                    <input type="checkbox" />
                                    <div>D</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>E</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>s</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>i</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>g</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>n</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>e</div>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <div>r</div>
                                </li>
                            </ul>
                        </span>
                    </section>
                </div>
            </div>
            <div className='skill-dev'>
                <div className='line-dev'>
                    <p>html</p>
                    <p>css</p>
                    <p>javascript</p>
                    <p>node.js</p>
                    <p>express.js</p>
                </div>
                <div className='line-dev'>
                    <p>mongodb</p>
                    <p>wordpress</p>
                    <p>react.js</p>
                    <p>mysql</p>
                    <p>cms</p>
                </div>
            </div>

            <div className='pro-container'>
                <h2>Parcours Pro</h2>
                <div className='pro-all-content'>
                    <div className='pro-left-content border-pro-animate'>
                    
                        <h4>Développement Web</h4>
                        <h5>Cefim / Altermap 2021</h5>
                        <p>Site vitrine pour une application
                            Faites sur Wordpress avec Divi (lien du site en bas de page)
                        </p>
                        <h4>Conseillère en vente</h4>
                        <h5>Devernois Août 2020 / Mars 2021</h5>
                        <p>Gestion complète d'un commerce de vêtement de luxe pour femmes</p>
                        <h5>Lush Sept 2019 / Avril 2020</h5>
                        <p>Vente de cosmétiques éthiques/Travail en équipe</p>
                        
                    </div>
                    <div className='pro-right-content'>
                        <h4>Graphiste</h4>
                        <h5>Direction de la Com’ LA POSTE 2015/2017</h5>
                        <p>Garante de la conception et de la réalisation de tout support print et leur déclinaison sur divers supports de communication. Réalisation de l'achat et le suivi de la fabrication.</p>
                    </div>
                </div>
            </div>
            <div className='training-container'>
                <h2>Formations</h2>
                <div className='training-all-content'>
                    <div className='training-left-content'>
                        <h4>Développement fullstack front end</h4>
                        <h5>CEFIM Mars 2021 / Nov 2021</h5>
                        <p>Langages et divers techniques dans les skills acquis.
                        </p>
                    </div>
                    <div className='training-right-content'>
                        <h4>prépa art / game art</h4>
                        <h5>Isart Digital 2013 / 2017</h5>
                        <p>Character/environnements Design 2D (un peu de 3D) </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    
    </section>
</>
)
        }

export default Career