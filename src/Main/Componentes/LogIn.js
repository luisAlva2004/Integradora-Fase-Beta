import React from 'react'
import img from './css/img/usuario.jpg'
import {Link} from 'react-router-dom'

export default function LogIn() {
  return (
    <>
    <body className="d-flex justify-content-center align-items-center vh-100">
      <div className='container'>
      <article>
            <article>
            <div
            className="bg-white p-5 rounded-5 text-secondary shadow"
            style={{width: "25rem"}}
          >
            <div className="d-flex justify-content-center">
              <img
                src={img}
                alt="usuario"
                style={{height: "7rem"}}
              />
            </div>
            <div className="text-center fs-1 fw-bold">Inicia sesion</div>
            <div className="input-group mt-4">
              <div className="input-group-text bg-success">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <input
                className="form-control bg-light"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input-group mt-1">
              <div className="input-group-text bg-success">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                className="form-control bg-light"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="d-flex justify-content-around mt-1">
              <div className="d-flex align-items-center gap-1">
                <input className="form-check-input" type="checkbox" />
                <div className="pt-1" style={{fontsize: "0.9rem"}}>Acepto terminos y condiciones</div>
              </div>
            </div>
            <div className="btn btn-success text-white w-100 mt-4 fw-semibold shadow-sm">
              Log In
            </div>
            <div className="d-flex gap-1 justify-content-center mt-1">
              <div>¿No tienes cuenta?</div>
              <Link to='/SignUp' className="text-decoration-none text-success fw-semibold"
                >Registrate!!</Link>
            </div>
            <div className="p-3">
              <div className="border-bottom text-center" style={{height: "0.7rem"}}>
                <span className="bg-white px-3">o</span>
              </div>
            </div>
            <div
              className="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm"
            >
            <i className="fa-brands fa-google"></i>
              <div className="fw-semibold text-secondary">Continúa con Google</div>
            </div>
          </div></article></article>
    </div></body>
    </>
  )
}
