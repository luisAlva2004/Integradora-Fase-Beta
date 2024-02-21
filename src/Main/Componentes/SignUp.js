import React from 'react'
import img from './css/img/usuario.jpg'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <>
      <body class="d-flex justify-content-center align-items-center vh-100">
      <div class="container">
      <article><article></article>
            <div
            class="bg-white p-5 rounded-5 text-secondary shadow"
            style={{width: "25rem"}}
          >
            <div class="d-flex justify-content-center">
              <img
                src={img}
                alt="usuario"
                style={{height: "7rem"}}
              />
            </div>
            <div class="text-center fs-1 fw-bold">Registrate</div>
            <div class="input-group mt-4">
              <div class="input-group-text bg-success">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <input
                class="form-control bg-light"
                type="email"
                placeholder="Nuevo email"
              />
            </div>
            <div class="input-group mt-1">
              <div class="input-group-text bg-success">
                <i class="fa-solid fa-lock"></i>
              </div>
              <input
                class="form-control bg-light"
                type="password"
                placeholder="Nueva contraseña"
              />
            </div>
            <div class="input-group mt-1">
                <div class="input-group-text bg-success">
                <i class="fa-solid fa-circle-check"></i>
                </div>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Confirma tu contraseña"
                />
              </div>
            <div class="d-flex justify-content-around mt-1">
              <div class="d-flex align-items-center gap-1">
                <input class="form-check-input" type="checkbox" />
                <div class="pt-1" style={{fontsize: "0.9rem"}}>Acepto terminos y condiciones</div>
              </div>
            </div>
            <div class="btn btn-success text-white w-100 mt-4 fw-semibold shadow-sm">
              Sign Up
            </div>
            <div class="d-flex gap-1 justify-content-center mt-1">
              <div>¿Ya tienes cuenta?</div>
              <Link to='/LogIn' class="text-decoration-none text-success fw-semibold"
                >Inicia sesion!!</Link>
            </div>
            <div class="p-3">
              <div class="border-bottom text-center" style={{height: "0.7rem"}}>
                <span class="bg-light px-3">o</span>
              </div>
            </div>
            <div
              class="btn d-flex gap-2 justify-content-center border mt-3 shadow-sm"
            >
            <i class="fa-brands fa-google"></i>
            <div class="fw-semibold text-secondary">Continúa con Google</div>
            </div>
          </div></article>
      </div>
      </body>
    </>
  )
}
