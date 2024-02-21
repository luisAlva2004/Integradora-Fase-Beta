import React from 'react'
import './css/styleP.css'

const Inicio = () =>{
    return (
        <div>
            <body>
                <div class="container"> 
                <br></br>
                    <header>
                        <div class="category"></div>
                            <div class="info">
                                <h1 class="title">Bienvenid@s!</h1>
                            </div>           
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
                            <p class="item-text"><span class="item-data">Alpha</span></p>
                        </div>
                    </section>
                    <article>
                        <h4>¿Por qué?</h4>
                        <p>La idea surgió a partir del tema de energías limpias y sustentables, el cual, nos ayuda a mejorar nuestro ambiente en especial en la localidad en la que vivimos, es por eso que decidimos ayudar con el ambiente y al mismo tiempo a la cartera de nuestros bolsillos, también utilizando la tecnología actual, con la cual, podremos hacer una tipo composta (que nos ayuda al medio ambiente con la reutilización de residuos orgánicos) la cual, con su fertilización, creara gas natural (ahorrándonos dinero).</p>

                        <h4>Desarrollo de idea</h4>
                        <p>El proyecto de "gas natural a base de gas controlado" se realizará primero físicamente, con botellas, agua, orina, desechos orgánicos y tuberías, primero se cortarán en pequeños trozos los desechos orgánicos y se meterán dentro de una botella de 2 L aprox.</p>
                        <p>Después se meterá un poco de agua y orina y antes de tapar la botella, se pondrá un pedazo de plástico con un hoyo en medio para la manguera que se asegurará de que no se escape el gas, una vez teniendo esto, procederemos a tapar la botella con una tapa que le quede bien con un hoyo en medio igualmente para la manguera que transportara el gas el cual estará conectado a una llave que se abrirá y se cerrará según querríamos qué salga el gas. Se dejará fermentar durante dos meses aprox. </p>
                        <p>Esto generará el gas natural. En medio de la manguera se pondrá un sensor previamente probado en Thinkercad, el cual tendrá un Arduino programado con C++ para que el sensor detecte cuanto gas están generado nuestros desechos, cuantos desechos tendremos que poner para generar una cierta cantidad de gas, cuanto duraría el gas actual aproximadamente, y también avisara cuando haya una fuga o un exceso de gas acumulado que podría ser peligroso para la salud de todos.</p>

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
        </div>
    )
}

export default Inicio