import React from "react";
import Slider from "react-slick";
import Servico from "../Servicos/Servicos"; 
import './carousel.css';
// Imagens
import reconstrucao from '../../imgs/reconstrucao.jpg';


export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Servico
            imageUrl={reconstrucao}
            text="Se precisar de mais alguma ajuda ou informação, fique à vontade para perguntar!"
            title="Reconstrução Dentária"
          />
        </div>
        <div>
          <Servico
            imageUrl={reconstrucao}
            text="Se precisar de mais alguma ajuda ou informação, fique à vontade para perguntar!"
            title="Reconstrução Dentária"
          />
        </div>
      </Slider>
    </div>
  );
}
