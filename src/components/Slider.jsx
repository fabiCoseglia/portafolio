import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Button, Card,Container } from "react-bootstrap";
import drinkup from "../images/drinkup.png";
import emilia from "../images/emilia.png";
import pokedex from "../images/pokedex.png";
import "swiper/css/effect-fade"; // Importa los estilos de efecto fade de Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';

export const Slider = () => {
  return (
    <Swiper
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1}
    pagination={true}
    modules={[Pagination]}
    >
      <SwiperSlide>
        <Card style={{ width: "18rem", height: "42rem", borderColor:'#537fe7', margin:'0 auto' }}>
          <Card.Img
            variant="top"
            src={drinkup}
          />
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title className="text-center">Drink Up</Card.Title>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Proyecto:</span> Landing donde se puede seleccionar una categoría de tragos con recetas.
            </Card.Text>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Funcionalidades:</span>{" "}
              Mostrar productos traídos desde una API externa, carrito con funcionalidades implementadas.
            </Card.Text>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
              React, Axios, interface de usuario creada con Chakra UI.
            </Card.Text>
            <Container className="d-flex justify-content-center gap-4">
            <Button variant="primary" href="https://drink-up-kappa.vercel.app/" target="_blank">Deployd</Button>
            <Button variant="primary" href="https://github.com/fabiCoseglia/Drink-Up" target="_blank">GitHub</Button>
            </Container>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card style={{ width: "18rem", margin: "0 auto", height: "42rem", borderColor:'#537fe7' }}>
          <Card.Img
            variant="top"
            src={pokedex}
          />
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title className="text-center">Challenge PokeDex</Card.Title>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Proyecto:</span> Desafío frontend donde se debe hacer una pokeDex haciando un llamado a una API externa utilizando React para desarrollar.
            </Card.Text>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Funcionalidades:</span>{" "}
              Mostrar todos los Pokemones, buscar un Pokemon, hacer el detalle de un Pokemon.
            </Card.Text>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
              React, Axios, uso de useContext para proveer información.
            </Card.Text>
            <Container className="d-flex justify-content-center gap-4">
            <Button variant="primary" href="https://poke-dex-react.vercel.app/" target="_blank">Deployd</Button>
            <Button variant="primary" href="https://github.com/fabiCoseglia/pokeDexReact" target="_blank">GitHub</Button>
            </Container>
          </Card.Body>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card style={{ width: "18rem", margin: "0 auto", height: "42rem", borderColor:'#537fe7' }}>
          <Card.Img
            variant="top"
            src={emilia}
          />
          <Card.Body className="d-flex flex-column justify-content-evenly">
            <Card.Title className="text-center">Drink Up</Card.Title>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Proyecto:</span> Rework de landing Page donde se puede ver la información de un artista, en su primera version fue construida con MVC. Ahora 100% en React
            </Card.Text>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Funcionalidades:</span>{" "}
              Mostrar información a modo de portfolio de un cliente.
            </Card.Text>
            <Card.Text className="text-start">
              <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
              React
            </Card.Text>
            <Container className="d-flex justify-content-center gap-4">
            <Button variant="primary" href="https://project-emily-react.vercel.app/" target="_blank">Deployd</Button>
            <Button variant="primary" href="https://github.com/fabiCoseglia/ProjectEmily-React" target="_blank">GitHub</Button>
            </Container>
          </Card.Body>
        </Card>
      </SwiperSlide>
   
    </Swiper>
  );
};

