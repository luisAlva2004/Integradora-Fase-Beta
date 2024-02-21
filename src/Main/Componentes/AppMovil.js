import React from 'react'

const AppMovil = () =>{
    return (
        <>
        <body>
            <div class="container">
            <br></br>
        <header>
            <div class="category">App Movil</div>       
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
            <h4>¿Qué hace?</h4>
            <p>En nuestra aplicación móvil se incluirá la función de una alerta, la cual alertará al usuario cada vez que falten desechos orgánicos, haya una fuga o un exceso de gas, esto funcionará por medio de una señal local enviada por el sensor (solo aplica para las personas que ya tengan el producto instalado)</p>

            <h4>¿Y para los que no lo tienen instalado?</h4>
            <p>Para las personas que no tengan el producto, solo se les hablara de igual  forma que la pagina web sobre la idea; se sabrá cuando alguien tiene el producto o no porque para ingresar al apartado de detalles y alertas del sensor (ya que tendrá apartado de información solamente y el apartado de detalles y alertas del sensor), deberán iniciar sección o conectarse con un código especial del sensor de su producto instalado.</p>
            
            <h4>QR de descarga</h4>
            <p>-----------------PROXIMAMENTE--------------------</p>


            <h4>Redes sociales</h4>
            <blockquote>
                <i class="fa-brands fa-facebook"> Gabdo_Oficial</i>
                <br></br>
                <i class="fa-brands fa-x-twitter"> Gabdo_Oficial</i>
                <br></br>
                <i class="fa-brands fa-instagram"> GABDO_IG</i>
            </blockquote>
        </article> 
            </div>
        </body>
        </>
    );
}

export default AppMovil