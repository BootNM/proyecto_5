// Signup
import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../../contexts/users/UserContext.jsx'

const Signup = () => {
  const userCtx = useContext( UserContext )
  const {
    registerUser,
    authStatus,
    verifyingToken
  } = userCtx

  const history = useNavigate()

  const [ formValues, setFormValues ] = useState( {
    name: "",
    surname: "",
    email: "",
    password: ""
  } )

  useEffect( () => {
    verifyingToken()

    if ( authStatus ) {
      history( "/profile" )
    }

  }, [ authStatus, verifyingToken, history ] )



  async function handleSubmit( event ) {
    event.preventDefault()
    console.log( formValues )
    registerUser( formValues )
  }

  function handleFormChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [ name ]: value }
    setFormValues( newValues )

  }
  if ( authStatus ) return (
    <>
      <Spinner></Spinner>
    </> )

  return (
    <div>
      <h1> Registro </h1>
      <form className='formulario' onSubmit={ handleSubmit }>
        <label className='label' htmlFor='name'>Nombre</label>
        <input className='input' id='name' name='name' type="text" value={ formValues.name } onChange={ handleFormChange }></input>

        <label className='label' htmlFor='surname'>Apellido</label>
        <input className='input' id='surname' name='surname' type="text" value={ formValues.surname } onChange={ handleFormChange }></input>

        <label className='label' htmlFor='email'>Correo</label>
        <input className='input' id='email' name='email' type="email" value={ formValues.email } onChange={ handleFormChange }></input>

        <label className='label' htmlFor='password'>Contraseña</label>
        <input className='input' id='password' name='password' type="password" value={ formValues.password } onChange={ handleFormChange }></input>

        <button className='botones2' type='submit'>Registrarse</button>
      </form>
    </div>
  )
}

export default Signup