import React, { useRef } from 'react';
import Link from './components/Links/Links'; 
import Person from './components/Person/Person';
import SimpleSlider from './components/carousel/carousel'; // Certifique-se de que o caminho está correto
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import profileImage from './imgs/Profie.jpg'; 
import whatsappImage from './imgs/whatsapp.png';
import instagramImage from './imgs/instagram.png';
import cases from './imgs/cases.png';
import tooth from './imgs/tooth.png'

function App() {
  const carouselRef = useRef(null);

  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="app-background">
          <Person
            imageUrl={profileImage} 
            text="Dr. Matheus Passos"
          />

          <Link 
            imageUrl={whatsappImage} 
            text="Entre em contato com nossa equipe" 
            link="https://api.whatsapp.com/send/?phone=5534996554227&text&type=phone_number&app_absent=0" 
          />

          <div onClick={scrollToCarousel}>
            <Link 
              imageUrl={cases} 
              text="Casos e Serviços" 
            />
          </div>

          <Link 
            imageUrl={instagramImage} 
            text="Conheça mais sobre mim" 
            link="https://www.instagram.com/drmatheuspassos/" 
          />

          <span className='Slogan'>Beleza e função em harmonia, para o sorriso que você merece</span>

          <div className="tooth-picture">
            <img
              style={{ width: '300px' }}
              src={tooth}
              alt="Logo"
            />
        </div>
      </div>
      <hr></hr>
      <div className="services" ref={carouselRef}>
        <SimpleSlider />
      </div>

    </div>
  );
}

export default App;
