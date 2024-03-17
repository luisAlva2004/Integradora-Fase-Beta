import React, {useState} from 'react'
import img from './css/img/usuario.jpg'
import appInt from '../Firebase/config'
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth'
import './css/styleP.css'
import Swal from 'sweetalert2'

const provider = new GoogleAuthProvider();
const auth = getAuth(appInt);

const LogIn = () => {

  const [registrando, setRegistrando] = useState(false);

  function logInGoogle(){
    signInWithPopup(auth, provider)
  .then((result) => {
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
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    Swal.fire({
      icon:"error",
      title:"Ocurrio un error intentelo mas tarde"
    })
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }

  const funcAutenticacion = async(e) =>{
    e.preventDefault()
    const correo = e.target.email.value;
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
            title: "Parece que la contraseña que intenta ingresar es incorrecta",
            text: "Desea cambiar su contraseña?",
            showDenyButton: true,
            confirmButtonText: "No, si la recuerdo",
            denyButtonText: `Si porfavor`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Okey", "Le quedan pocos intentos", "warning");
            } else if (result.isDenied) {
              sendPasswordResetEmail(auth, correo)
              .then(() => {
                Swal.fire({
                  icon:"success",
                  title:"Se le envio un correo para restablecer su contraseña",
                })
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                  icon:"error",
                  title:errorMessage,
                })
              });
            }
          });
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
     <body className="align-items-center vh-100">
      <div className='container'>
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
                placeholder="Ejemplo@email.com" id='email'
              />
            </div>
            <div className="input-group mt-1">
              <div className="input-group-text bg-success">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                className="form-control bg-light"
                type="password"
                placeholder="Contraseña" id='password'
              />
              <br></br>
            </div>
            <div className="d-flex justify-content-around mt-4">
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
            <div className="btn d-flex gap-1 justify-content-center mt-1 mt-4">
              <div className="fw-semibold text-secondary"><button className='btn btn-secondary float-end' onClick={logInGoogle}>
              <i className="fa-brands fa-google"></i>&nbsp;
              Continúa con Google</button></div>
            </div>
          </div></article>
    </div></body><hr></hr>
    </>
  )
}

export default LogIn