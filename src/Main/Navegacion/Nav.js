import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Inicio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MENÚ</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link" to='/AppMovil'>Aplicacion Movil</Link>
            </li>
            <br></br>
            <li className="nav-item">
                <Link className="nav-link" to='/Producto'>Producto</Link>
              </li>
            <br></br> 
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cuenta
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to='/LogIn'>Inicia sesion</Link></li>
                <li><Link className="dropdown-item" to='/SignUp'>Registrate</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}




