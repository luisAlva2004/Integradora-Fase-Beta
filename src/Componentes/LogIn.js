import React, {useState} from 'react'
import img from './css/img/usuario.jpg'
import appInt from '../Firebase/config'
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './css/styleP.css'
import Swal from 'sweetalert2'

const provider = new GoogleAuthProvider();
const auth = getAuth(appInt);

const LogIn = () => {

  const [registrando, setRegistrando] = useState(false);

  function logInGoogle(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

  const funcAutenticacion = async(e) =>{
    e.preventDefault()
    const correo = e.target.email.value
    const contraseña = e.target.password.value;
    
    var check = document.getElementById('terminos')

    if(check.checked){
      if(registrando){
        try {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registrando...",
            showConfirmButton: false,
            timer: 1500,
            html:`
            <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            `
          });
          await createUserWithEmailAndPassword(auth, correo, contraseña)
        } catch (error) {
          Swal.fire({
            icon:"warning",
            title:"Asegurese que la contraseña tenga mas de 6 caracteres",
            text:"O escriba bien su correo"
          })
        }
        
      }else{
        try{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Iniciando sesion...",
            showConfirmButton: false,
            timer: 1500,
            html:`
            <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            `
          });
          await signInWithEmailAndPassword(auth, correo, contraseña)
        }catch (error){
          Swal.fire({
            icon:"error",
            title:"El correo o contraseña son incorrectos",
            text:"O ya tenemos este correo dentro de nuestra BD"
          })
        }
      }
    }else{
      Swal.fire({
            icon:"warning",
            title:"Acepte los terminos y condiciones"
          })
    }
  }

  return (
    <>
    <hr></hr>
     <body className="align-items-center vh-100">
      <div className='container'>
      <article>
            <article>
            <div
            className="bg-white p-5 rounded-5 text-secondary shadow-lg"
            style={{width: "25rem"}}
          >
            <div className="d-flex justify-content-center">
              <img
                src={img}
                alt="usuario"
                style={{height: "7rem"}}
              />
            </div>
            <div className="text-center fs-1 fw-bold">{registrando ? "Registrate" : "Inicia sesion"}</div>
            
            <form onSubmit={funcAutenticacion}>
            <div className="input-group mt-4">
              <div className="input-group-text bg-success">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <input
                className="form-control bg-light"
                type="email"
                placeholder="Ingrese su email" id='email'
              />
            </div>
            <div className="input-group mt-1">
              <div className="input-group-text bg-success">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                className="form-control bg-light"
                type="password"
                placeholder="Ingrese su contraseña" id='password'
              />
            </div>
            <br></br>
            <div className="d-flex justify-content-around mt-1">
              <div className="d-flex align-items-center gap-1">
                <input className="form-check-input" type="checkbox" id='terminos' />
                <div className="pt-1 fw-semibold" style={{fontsize: "0.9rem"}}>Acepto terminos y condiciones</div>
              </div>
            </div> <br></br>
            <div className="d-grid gap-2">
              <button className='btn btn-success'>{registrando ? "Sign up" : "Log In"}</button>
            </div>
            </form>
            <div className="d-flex gap-1 justify-content-center mt-1 mt-4 fw-semibold">
            {registrando ? "Ya tienes cuenta? " : "No tienes cuenta?"}<button className='btn btn-success' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button>
            </div>
            <div className="p-3">
              <div className="border-bottom text-center" style={{height: "0.7rem"}}>
                <span className="bg-white px-3">o</span>
              </div>
            </div>
            <div
              className="btn d-flex gap-1 justify-content-center mt-1 mt-4"
            >
              
              <div className="fw-semibold text-secondary"><button className='btn btn-secondary float-end' onClick={logInGoogle}>
              <i className="fa-brands fa-google"></i>&nbsp;
              Continúa con Google</button></div>
            </div>
          </div></article></article>
    </div></body><hr></hr><br></br>
    </>
  )
}

export default LogIn