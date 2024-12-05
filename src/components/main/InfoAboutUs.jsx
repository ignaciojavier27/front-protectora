import "./InfoAboutUs.css";
const InfoInstagram = () => {
  return (
    <section className="container-lg info-about-us mx-auto">
      <div className="info-about-us-shadow"></div>

      <div className="info-about-us-container d-flex flex-column flex-lg-row">
        <img
          src="/info-about-us.png"
          alt="Imagen de la sección"
          className="img-fluid"
          loading="lazy"
        />
        <p>
          Creemos que <span>cada vida cuenta</span>. Nuestra misión es
          <span> dar voz a quienes no la tienen</span>, brindando amor, cuidado y
          <span> un futuro lleno de esperanza</span> para los animales que más lo
          necesitan. Unidos, podemos construir un mundo más compasivo y lleno de segundas oportunidades.
          <button className="btn-adopta mt-3">Sobre Nosotros</button>
        </p>
      </div>
    </section>
  );
};

export default InfoInstagram;
