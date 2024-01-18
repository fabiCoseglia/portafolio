import React from 'react'
import { Button, Container } from 'react-bootstrap'
import contactMe from '../images/contactMe.png'

export const ContactMe = () => {

    const phoneNumber = '+5491124561727'; 
    const emailAddress = 'fabiancoseglia@gmail.com'; 

/*   const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }; */

  const linkedin = 'https://www.linkedin.com/in/fabicoseglia/';
  
  const handleEmailButtonClick = () => {
    const emailAddress = "fabiancoseglia@gmail.com";
    const subject = "Asunto del correo";
    const body = "Cuerpo del correo";

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
  };



  return (
    <Container className='card p-3 col-11 col-lg-6 '  style={{borderColor:'#537fe7'}}>
        <h2 className="text-center mb-4 mt-1"
          style={{ fontSize: "45px",color:'#537fe7'}} id='contact'>Contactame</h2>
        <Container className="d-flex align-items-center justify-content-center flex-column">
        <img src={contactMe} alt="Imagen" />
        <p>Si te interesa mi perfil, puedes enviarme un mail o contactarme por Linkedin:</p>
        <div>
{/*         <Button variant="success" onClick={handleWhatsAppClick} className="me-3">
          WhatsApp
        </Button> */}
        <Button variant="danger" onClick={handleEmailButtonClick} className='m-2'>
            Enviar Correo
          </Button>
        <Button style={{ backgroundColor: "#537FE7" }} href={linkedin} target="_blank">
          Linkedin
        </Button>
        </div>
        
        </Container>
    </Container>
  )
}
