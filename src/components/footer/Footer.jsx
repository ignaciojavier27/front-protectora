import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer container-fluid">
      <div className="footer-grid container-lg">
        <div className="footer-logo">
          <img
            src="/main-logo.png"
            alt="Logo de la fundación"
            className="img-fluid"
          />
          <p>
            Transformando vidas de animales y personas a través del amor y el
            compromiso.
          </p>
        </div>
        <div className="footer-links">
          <h4>Enlaces útiles</h4>
          <ul>
            <li>
              <a href="#about">Quiénes somos</a>
            </li>
            <li>
              <a href="#services">Nuestros servicios</a>
            </li>
            <li>
              <a href="#adopt">Adopta</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook-icon.png" alt="Icono de facebook" className="img-fluid"/>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram-icon.png" alt="Icono de instagram" className="img-fluid"/>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter-icon.png" alt="Icono de twitter" className="img-fluid"/>
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <p>
            <img src="/enveloped-icon.png" alt="Icono de correo"  className="img-fluid me-2"/> contacto@fundacionfelices.org
          </p>
          <p>
            <img src="/phone-icon.png" alt="Icono de telefono"  className="img-fluid me-2"/> +56 9 1234 5678
          </p>
        </div>
      </div>
      <div className="footer-credits text-center">
        <p>© 2024 Fundación Animales Felices. Todos los derechos reservados.</p>
      </div>
    </section>
  );
};

export default Footer;
