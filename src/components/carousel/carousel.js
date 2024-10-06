import React from "react";
import Slider from "react-slick";
import Servico from "../Servicos/Servicos"; 
import './carousel.css';
// Imagens
import reconstrucao from '../../imgs/reconstrucao.jpg';
import white from '../../imgs/teethWhitening.jpg'
import prosthesis from '../../imgs/prosthesis.jpg'
import implant from '../../imgs/implant.jpg'

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
            text="Procedimento para restaurar dentes danificados ou quebrados, recuperando a função e a estética do sorriso"
            title="Reconstrução Dentária"
          />
        </div>
        <div>
          <Servico
            imageUrl={white}
            text="Tratamentos como clareamento e limpeza para melhorar a aparência geral dos dentes e manter a saúde bucal"
            title="Estética geral"
          />
        </div>
        <div>
          <Servico
            imageUrl={prosthesis}
            text="Solução personalizada para substituir dentes ausentes, restabelecendo a função mastigatória e a harmonia do sorriso"
            title="Prótese Dentária"
          />
        </div>
        <div>
          <Servico
            imageUrl={implant}
            text="Procedimento cirúrgico para substituir raízes dentárias com pinos, oferecendo uma base sólida para dentes artificiais permanentes"
            title="Implante Dentário"
          />
        </div>
      </Slider>
    </div>
  );
}
