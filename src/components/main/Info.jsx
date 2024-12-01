import './Info.css';
const Info = () => {
  return (
    <section className="container-lg section-info d-flex flex-column flex-lg-row">

      <article className="section-info-cards d-flex flex-column flex-lg-row flex-wrap justify-content-center justify-content-lg-around">
        <div className="info-card d-flex flex-column justify-content-around align-items-center position-relative">
          <h3>Adopta</h3>
          <p className='text-center'>
            Encuentra a tu nuevo compañero de vida. Los animales esperan un
            hogar lleno de amor.
          </p>
          <img src="/dog-icon.png" alt="Icono mascota"/>
        </div>
        <div className="info-card d-flex flex-column justify-content-around align-items-center position-relative">
          <h3>Dona</h3>
          <p className='text-center'>
            Cada donación ayuda a salvar vidas. Contribuye al cuidado y
            alimentación de los animales.
          </p>
          <img src="/icon-donation.png" alt="Icono donacion"/>
        </div>
        <div className="info-card d-flex flex-column justify-content-around align-items-center position-relative">
          <h3>Voluntariado</h3>
          <p className='text-center'>
            Sé parte del cambio. Únete como voluntario y ayuda a transformar
            vidas.
          </p>
          <img src="/icon-volunter.png" alt="Icono voluntariado" />
        </div>
        <div className="info-card d-flex flex-column justify-content-around align-items-center position-relative">
          <h3>Educación</h3>
          <p className='text-center'>
            Aprende sobre el cuidado animal y adopción responsable.
          </p>
          <img src="/icon-veterinary.png" alt="Icono educacion" />
        </div>
      </article>

      <article className="section-info-right d-flex flex-column align-items-end justify-content-center">
          <h2 className='align-self-center align-self-lg-end'>Somos distintos.</h2>
          <p> 
            Nos preocupamos no solo por rescatar animales, sino por ofrecerles
            una vida digna y una segunda oportunidad. Trabajamos con amor,
            dedicación y compromiso para marcar la diferencia en cada historia.
          </p>
      </article>

    </section>
  );
};

export default Info;
