import {useState} from 'react'
import appInt from '../Firebase/config';
import {getAuth, onAuthStateChanged} from 'firebase/auth'

import Home from './Home';
import LogIn from './LogIn'

const auth = getAuth(appInt)

const Auth = () => {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) =>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <div>
    {usuario ? <Home correoUsuario = {usuario.email} /> : <LogIn/>}
    </div>
  )
}

export default Auth