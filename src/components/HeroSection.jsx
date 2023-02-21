import { Button, Container, Image } from 'react-bootstrap';
import image from '../images/fabi.jpg';
import './HeroSection.css' 

export const HeroSection = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1dJbRwS-UuYjVdXzRnpuphEEXMGU7vCm-";
    link.download = "fabianCosegliaCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container className="HeroSection d-lg-flex ">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Image
          src={image}
          roundedCircle
          className="w-50"
          style={{ border: "4px solid #537FE7" }}
        />
        <h2 className="mt-2 writing-animation text-center text-muted d-lg-none fabiH2">
          Hola!, Soy Fabi{" "}
        </h2>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h1
          style={{ fontSize: "30px", fontWeight: "bold", color: "#537FE7" }}
          className="mt-3"
        >
          FULL STACK DEVELOPER
        </h1>
        <Container>
          <p
            style={{ textAlign: "justify", fontWeight: "bold" }}
            className="font-weight-bold text-muted"
          >
            Busco oportunidades laborales donde me permitan desenvolverme como
            desarrollador full stack y seguir creciendo profesionalmente dentro
            del ambiente IT.
          </p>
        </Container>

        <Container className="d-flex gap-2 mt-2">
          <Button onClick={handleDownload} style={{ backgroundColor: "#537FE7" }}>Descargar CV</Button>
          <Button style={{ backgroundColor: "#537FE7" }} href='https://github.com/fabiCoseglia' target="_blank">Mi Github</Button>
        </Container>
      </Container>
    </Container>
  );
}
