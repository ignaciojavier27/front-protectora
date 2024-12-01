import './Hero.css'
const Hero = () => {
  return (
    <section className="container-lg hero d-flex flex-column align-items-center justify-content-center flex-lg-row">

      <article className="hero-info">
        <div className="info">
          <h1>
            Comprometidos con el <strong>bienestar animal</strong>
          </h1>
          <p>
            Rescatamos, cuidamos y creamos segundas oportunidades. Ayúdanos a
            transformar vidas: la de los animales y la tuya.
          </p>
          <button className="btn-adopta">Adopta</button>
        </div>
      </article>

      <article className="hero-image">
        <div className="hero-image-container position-relative mx-auto">
          <div className="shadow-image"></div>
        </div>
      </article>

    </section>
  );
};

export default Hero;
