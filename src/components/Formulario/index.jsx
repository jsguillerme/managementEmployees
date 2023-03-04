import Input from '../Input';
import Botao from '../Botao';
import style from './formulario.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();
  const [emailEmployee, setEmailEmployee] = useState('');
  const [passwordEmployee, setpasswordEmployee] = useState('');
  const [showP, setShowP] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);

  async function authLogin(event) {
    setLoadLogin(true)
    event.preventDefault();
    const payload = {
      email: emailEmployee,
      password: passwordEmployee
    }

    const response  = await fetch('https://back-fun.onrender.com/auth/login', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if(response.status !== 200) {
      setShowP(true)
      setTimeout(() => {
        setShowP(false)
      }, 4000);
    } else {
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setLoadLogin(false)
  }

  return (
    <div className={style.container}>
      <form className={style.container__formulario} onSubmit={authLogin}>
        <Input
          id="inputEmail"
          type="email"
          placeholder="Digite o seu e-mail"
          status={false}
          label='Email'
          valor={emailEmployee}
          aoAlterado={valor => setEmailEmployee(valor)}
        />
        <Input
          id="inputPassword"
          type="password"
          placeholder="Digite sua senha"
          icon={<FontAwesomeIcon icon={FontsIcon.faKey} />}
          status={false}
          label='Password'
          valor={passwordEmployee}
          aoAlterado={valor => setpasswordEmployee(valor)}
        />
        <Botao
          type="submit"
          disabled={loadLogin}
          icon= {<FontAwesomeIcon pulse={loadLogin} icon={loadLogin ? FontsIcon.faSpinner : FontsIcon.faSignIn} />}
          children='LOGIN'
        />
        {<span style={{display: (showP ? 'block' : 'none')}}>Seus dados estão incorretos! Verifique seu email ou sua senha!</span>}
      </form>
    </div>
  )
}