import "./InfoServices.css";

const InfoServices = () => {
  return (
    <section className="container-fluid info-services--section py-5">
      <div className="container-lg">
        <h2 className="text-center">Nuestros Servicios</h2>
        <div className="info-services-container-cards d-flex flex-column flex-lg-row justify-content-center align-items-center justify-content-lg-between">
          <div
            className="info-services-card"
            style={{ backgroundImage: 'url("/gatos-rescatados.jpg")' }}
          >
            <div className="info-services-card-opacity"></div>
            <p>Ayudamos a salvar vidas de animales abandonados.</p>
          </div>
          <div
            className="info-services-card"
            style={{ backgroundImage: 'url("/perros-anios-dorados.avif")' }}
          >
            <div className="info-services-card-opacity"></div>
            <p>
              Cuidamos a los animales en su etapa dorada, ofreciéndoles amor y
              bienestar en sus últimos años.
            </p>
          </div>
          <div
            className="info-services-card"
            style={{ backgroundImage: 'url("/rehabilitacion-perros.jpg")' }}
          >
            <div className="info-services-card-opacity"></div>
            <p>
              Ayudamos a rehabilitar animales maltratados, devolviéndoles la
              confianza y la oportunidad de un nuevo comienzo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoServices;
