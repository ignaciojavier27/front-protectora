import './Navbar.css'
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-lg">

          <a className="navbar-brand position-absolute main-logo" href="#">
            <img src="/main-logo.png" alt="Logo" height="80px" className="d-inline-block align-text-top"/>
          </a>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Adoptar</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Apoya
                  <img src="/dropdown-icon.png" alt="icon" className="ms-1" style={{ width: '14px', height: '14px' }} />
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Alianzas</a></li>
                  <li><a className="dropdown-item" href="#">Socios</a></li>
                  <li><a className="dropdown-item" href="#">Voluntariado</a></li>
                </ul>
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="#">Nosotros</a>
              </li>
            </ul>
          </div>

          <a className="btn-donate">
            Donar
          </a>

        </div>
      </nav>
    );
}
  
export default Navbar;
  