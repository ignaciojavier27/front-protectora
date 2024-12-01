import "./InfoLocation.css";
const InfoLocation = () => {
  return (
    <section className="container-lg info-location">
      <h2 className="text-center">Ubicación</h2>
      <p className="text-center">
        Estamos en un punto fácil de acceder para todos. Ven a visitarnos y sé
        parte del cambio en la vida de muchos animales.
      </p>
      <div className="container-iframe container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13076.589122942667!2d-71.24156949807127!3d-34.97797543902213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966457a281df920b%3A0x4045b7dc0ab72293!2sEstadio%20La%20Granja!5e0!3m2!1ses-419!2scl!4v1733009673403!5m2!1ses-419!2scl"
          className="info-location-iframe"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default InfoLocation;
