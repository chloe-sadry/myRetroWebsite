import React from 'react'
import './App.css';
import Presentation from './components/Presentation';
import FormContact from './components/FormContact';
import GalleryArt from './components/GalleryArt';
import Career from './components/Career';



function App() {



  return (
    <section className='App'>
      <div className='parallax'>
          <div className="start-content">
                <span></span>
          </div>
        <div>
          <Presentation/>
          <GalleryArt/>
          <Career/>
          <FormContact/>
        </div>
        <div className="end-content">
              <span></span>
        </div>
      </div>
      <div className='navbar'>
        <p>Chloé Sadry. Tous droits réservés.</p>
        <div>
          <h4>Liens utiles :</h4>
          <a href='https://ou-vivre.fr/' rel="noreferrer" target="_blank">Projet Altermap : Ouvivre Site Vitrine</a>
          <a href="https://www.linkedin.com/in/chlo%C3%A9-sadry-294a9516b/" rel="noreferrer" target="_blank">
            Linkedin
          </a>
          <a href='https://www.instagram.com/chloe_sadry/?hl=fr' rel="noreferrer" target="_blank">
            Instagram @chloe_sadry
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
