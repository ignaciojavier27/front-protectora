import "./Testimonios.css";
const Testimonios = () => {
  return (
    <section className="container-lg section-testimonios">
      <h2 className="text-center text-lg-start">Hacemos la diferencia.</h2>
      <div className="d-flex flex-column flex-lg-row justify-content-between gap-5">
        <article className="section-testimonios-datos d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <ul className="d-flex flex-column gap-3">
            <li>
                <strong>Más de 10 años de experiencia</strong> ayudando a animales
                necesitados.
            </li>
            <li>
                <strong>3000+ animales rescatados</strong> y reubicados en hogares
                amorosos.
            </li>
            <li>
                <strong>Red de 100+ voluntarios</strong> comprometidos con el
                bienestar animal.
            </li>
            <li>
                <strong>80% de éxito</strong> en rehabilitación de animales en
                condiciones críticas.
            </li>
            </ul>
        </article>
        <article className="section-testimonios-resenias d-flex flex-column justify-content-center align-items-center">
            <div className="resenia">
            <p>
                &quot;Este es el segundo año que adopto con ellos. Todo el proceso fue
                claro y amable. Ver el cuidado que tienen con cada animal te llena
                el corazón.&quot;
            </p>
            <p>
                <strong>- Laura P. ⭐⭐⭐⭐⭐</strong>
            </p>
            </div>
            <div className="resenia">
            <p>
                &quot;Llevé a un perrito callejero en muy mal estado, y en poco tiempo
                lograron rehabilitarlo. Hoy está en un hogar lleno de amor. ¡Gracias
                infinitas!&quot;
            </p>
            <p>
                <strong>- Juan M. ⭐⭐⭐⭐⭐</strong>
            </p>
            </div>
            <div className="resenia">
            <p>
                &quot;Adopté un gatito hace seis meses. Fue una experiencia maravillosa,
                desde la atención hasta el seguimiento que me dieron. Lo recomiendo
                al 100%.&quot;
            </p>
            <p>
                <strong>- Sofía G. ⭐⭐⭐⭐⭐</strong>
            </p>
            </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonios;
