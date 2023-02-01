import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './footer.css';

const Footer = () => {
  return (
    <div className='anteFooter' variant='dark'>
      
      <div className='footer'  variant='dark'>
              <div className="contacto">
      
                <h2>CONTACTO</h2>
                <button href="#">Contáctanos</button>
                <button href="#">Preguntas Frecuentes</button>
                <button href="#">Trabaja con Nosotros</button>
                <button href="#">Cambios y Devoluciones</button>
                <button href="#">Nuestros Locales</button>
       
              </div>
    
              <div className="informate">
      
                <h2>INFÓRMATE</h2>
                <button href="#">Términos y Condiciones</button>
                <button href="#">Política de Privacidad</button>
                <button href="#">Cómo Funciona el Sitio</button>
                <button href="#">Aceptación de Cookies</button>
                <button href="#">Ayuda para Proyecto Gratuito</button>
                
              </div>
    
              <div className="ayuda">
      
                <h2>AYUDA</h2>
                <button href="#">Privacidad</button>
                <button href="#">Centro de Ayuda</button>
                <button href="#">Accesibilidad</button>
      
              </div>

              <div className="icons">
      
                <h2>REDES</h2>
                <button href="#">

                <div className='icon' style={{fontSize:'30px', color:'gray'}}>
                <FontAwesomeIcon icon={faFacebook} />
                </div>

                </button>

                <button href="#">

                <div className='icon' style={{fontSize:'30px', color:'gray'}}>
                <FontAwesomeIcon icon={faInstagram} />
                </div>

                </button>

                <button href="#">

                <div className='icon' style={{fontSize:'30px', color:'gray'}}>
                <FontAwesomeIcon icon={faTwitter} />
                </div>

                </button>
                
      
              </div>
    
            </div>
    </div>
  )
}

export default Footer