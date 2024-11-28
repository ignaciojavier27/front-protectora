import './Main.css'
const Main = () => {
  return (
    <main className="container-lg p-0">
      <section className="hero position-relative">
        <article className="hero-info">
          <div className="info">
            <h1>Comprometidos con el <strong>bienestar animal</strong></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              voluptatibus quidem, eaque, quia, quibusdam dolores quos
            </p>
            <button className='btn-adopta'>
              Adopta
            </button>
          </div>
        </article>
        <article className="hero-image">
          <div className="hero-image-container">
            <div className="shadow-image"></div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Main
