import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Router, Route, Link, useNavigate } from 'react-router-dom';


function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [count, setCount] = useState(0)

  const onButtonClick = () => {
    // will update later
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Chewy Beauty and Spa</h1>
      <div className='login'>
        <h2> Returning User?</h2>
        Log in
      </ div>

      <div className={'inputContainer'}>
        Email:  
        <input 
          value={email}
          placeholder="Enter your email address here"
          onChange={(e) => setEmail( e.target.value)}
          className={'inputBox'}
        />
        <label className="error-message">{emailError}</label>
      </div>
      <div className={'inputContainer'}>
        Password: 
        <input 
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword( e.target.value)}
          className={'inputBox'}
        />
        <label className="error-message">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={"Log In"} />
        <br/>
        <button onClick={() => setCount((count) => count + 1)}>
          click me {count}
        </button>
        <p>
          New to Chewy's beauty? You can sign up <link></link> here
        </p>
        
      </div>
      <p className="read-the-docs">
        Learn more about our services
      </p>
    </>
  )
}

export default App
