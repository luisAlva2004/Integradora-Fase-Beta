import React from 'react'
import appInt from '../Firebase/config'
import {getAuth, signOut, deleteUser, sendEmailVerification} from 'firebase/auth'
import Swal from 'sweetalert2'
const auth = getAuth(appInt)

const Home = ({correoUsuario}) => {

  function btnBorrar(){
    const user = auth.currentUser;
    Swal.fire({
      title: "Esta segur@ de borrar su cuenta?",
      showDenyButton: true,
      confirmButtonText: "Cancelar",
      denyButtonText: `Borrar Cuenta`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cancelando", "", "success");
      } else if (result.isDenied) {
        deleteUser(user).then(() => {
          Swal.fire("Su cuenta a sido borrada", "", "info");
        }).catch((error) => {
          Swal.fire("Error", "", "error");
        });
      }
    });
  }

  sendEmailVerification(auth.currentUser)
    .then(() => {
      Swal.fire({
        icon:"success",
        title:"Le mandamos un correo de verificacion",
        text:"Revise su correo"
      })
    });

  return (
  <>
      

      <div class="offcanvas offcanvas-start" data-bs-theme="dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <h2 class="offcanvas-title" id="offcanvasScrollingLabel">BIENVENID@</h2>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <hr></hr>
            <h4 class="text-white">Sesion iniciadada como: &nbsp;<i>{correoUsuario}</i></h4>
          <hr></hr>
            <br></br>
            <button className='btn btn-success' onClick={()=>signOut(auth)}>Cerrar Sesion</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4 class="text-white"><i>Desea eliminar su cuenta?</i></h4>
            <hr></hr>
            <button className='btn btn-danger' onClick={btnBorrar}>Borrar Cuenta</button>
        </div>
      </div>
           <body>
                <div class="container"> 
                <br></br>
                    <header>
                      <button class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><h2><i class="fa-solid fa-user-group">&nbsp;</i>Tu cuenta&nbsp;</h2></button>
                        <div class="category"></div>     
                    </header>
                    <section class="details">
                        <div class="item">
                            <h4 class="item-title">Equipo</h4>
                            <p class="item-text"><span class="item-data">4</span></p>
                        </div>
                        <div class="item">
                            <h4 class="item-title">Tema</h4>
                            <p class="item-text"><span class="item-data">Energias limpias y sustentables</span></p>
                        </div>
                        <div class="item">
                            <h4 class="item-title">Estado</h4>
                            <p class="item-text"><span class="item-data">Beta</span></p>
                        </div>
                    </section>
                    <article>
                    <hr></hr>
                      <h2>INICIO</h2>
                        <h4>¿Por qué?</h4>
                        <p>La idea surgió a partir del tema de energías limpias y sustentables, el cual, nos ayuda a mejorar nuestro ambiente en especial en la localidad en la que vivimos, es por eso que decidimos ayudar con el ambiente y al mismo tiempo a la cartera de nuestros bolsillos, también utilizando la tecnología actual, con la cual, podremos hacer una tipo composta (que nos ayuda al medio ambiente con la reutilización de residuos orgánicos) la cual, con su fertilización, creara gas natural (ahorrándonos dinero).</p>

                        <h4>Desarrollo de idea</h4>
                        <p>El proyecto de "gas natural a base de gas controlado" se realizará primero físicamente, con botellas, agua, orina, desechos orgánicos y tuberías, primero se cortarán en pequeños trozos los desechos orgánicos y se meterán dentro de una botella de 2 L aprox.</p>
                        <p>Después se meterá un poco de agua y orina y antes de tapar la botella, se pondrá un pedazo de plástico con un hoyo en medio para la manguera que se asegurará de que no se escape el gas, una vez teniendo esto, procederemos a tapar la botella con una tapa que le quede bien con un hoyo en medio igualmente para la manguera que transportara el gas el cual estará conectado a una llave que se abrirá y se cerrará según querríamos qué salga el gas. Se dejará fermentar durante dos meses aprox. </p>
                        <p>Esto generará el gas natural. En medio de la manguera se pondrá un sensor previamente probado en Thinkercad, el cual tendrá un Arduino programado con C++ para que el sensor detecte cuanto gas están generado nuestros desechos, cuantos desechos tendremos que poner para generar una cierta cantidad de gas, cuanto duraría el gas actual aproximadamente, y también avisara cuando haya una fuga o un exceso de gas acumulado que podría ser peligroso para la salud de todos.</p>

                        <hr></hr>
                        <h2>APP MOVIL</h2>
                        <h4>¿Qué hace?</h4>
                        <p>En nuestra aplicación móvil se incluirá la función de una alerta, la cual alertará al usuario cada vez que falten desechos orgánicos, haya una fuga o un exceso de gas, esto funcionará por medio de una señal local enviada por el sensor (solo aplica para las personas que ya tengan el producto instalado)</p>

                        <h4>¿Y para los que no lo tienen instalado?</h4>
                        <p>Para las personas que no tengan el producto, solo se les hablara de igual  forma que la pagina web sobre la idea; se sabrá cuando alguien tiene el producto o no porque para ingresar al apartado de detalles y alertas del sensor (ya que tendrá apartado de información solamente y el apartado de detalles y alertas del sensor), deberán iniciar sección o conectarse con un código especial del sensor de su producto instalado.</p>
            
                        <h4>QR de descarga</h4>
                       <p>-----------------PROXIMAMENTE--------------------</p>
                        <hr></hr>
                        <h2>PRODUCTO</h2>
                        <h4>Objetivo</h4>
                        <p>Con el proyecto de gas natural solucionamos el problema de contaminacion que hay en nuestra localidad
                        al reciclar los desechos organicos para tranformalos en gas natural y al mismo tiempo solucionamos el
                        problema economico que muchas comunidades tienen al solicitar el servicio de gas natural para sus hogares.
                      </p>

                        <h4>Materiales</h4>
                        <ul>
                          <li>Sensor de gas</li>
                          <li>Cables</li>
                          <li>Pantalla LCD</li>
                          <li>Resistencias (2)</li>
                          <li>Potenciómetro</li>
                          <li>Arduino</li>
                        </ul>
                        <hr></hr>
                    <div>
                        <h4>Redes sociales</h4>
                            <blockquote>
                                <i class="fa-brands fa-facebook"> Gabdo_Oficial</i>
                                <br></br>
                                <i class="fa-brands fa-x-twitter"> Gabdo_Oficial</i>
                                <br></br>
                                <i class="fa-brands fa-instagram"> GABDO_IG</i>
                            </blockquote>
                    </div>
                    </article>
                </div>
            </body>
        </>
  )
}

export default Home