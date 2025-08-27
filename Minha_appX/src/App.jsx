import './styles.css'

import signImage from './assets/sign.svg'



function Formulario() {

  return (
    <form className='formulario'>
      <div className='formulario-svg'>
        <img src={signImage} alt="" srcSet='' />
      </div>
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" required />
      <MyButton />
    </form>

  )

}



function MyButton() {

  return (

    <button className="botao">Cadastrar</button>

  )
}




function App() {

  return (
    <>
      <h1>Olá, Mundo!</h1>
      <Formulario />

    </>


  )
}

export default App