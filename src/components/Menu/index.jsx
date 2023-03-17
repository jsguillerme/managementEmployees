import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { httpHeadersFactory } from '../../factory/http.factory'
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import style from './menu.module.scss';
import Input from '../Input'
import Botao from '../Botao'
import Option from '../Options';


export default function Menu(props) {

  const { setNewEmployees } = props;

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRole, setRegisterRole] = useState('user');
  const [loadLogin, setLoadLogin] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  useEffect(() => {
    if (props.setEditEmployees._id) {
      window.scroll({top , behavior: 'smooth'})
      setShowRegister(false);
      setRegisterEmail(props.setEditEmployees.email)
      setRegisterName(props.setEditEmployees.nome)
      setRegisterPassword('')
      setRegisterRole(props.setEditEmployees.role)
    }

    return;
  }, [props.setEditEmployees])

  async function registerEmployee(event) {
    event.preventDefault();
    setLoadLogin(true)

    const payload = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
      role: registerRole,
      confirmPassword: registerPassword,
    }

    const registerEmployeeApi = async () => {
      const response = await fetch('https://back-fun.onrender.com/auth/register', {
        method: 'POST',
        headers: httpHeadersFactory(),
        body: JSON.stringify(payload)
      });

      if (response.status !== 201) {
        setShowP(true)
        setTimeout(() => {
          setShowP(false)
        }, 4000)
      } else {
        setNewEmployees(payload)
      }
    }

    registerEmployeeApi();
    setRegisterEmail('')
    setRegisterName('')
    setRegisterPassword('')
    setRegisterRole('user')
    setLoadLogin(false)
  }

  return (
    <section className={style.menuPrincipal}>
      <aside className={style.menuPrincipal__register}>
        <h3>Preencha as informações</h3>
        <p>Coloque as informações para cadastrar um funcionário na empresa!</p>
        <form onSubmit={registerEmployee}>
          <Input
            id='inputFullname'
            label='Nome Completo'
            placeholder='Digite o nome completo'
            required={true}
            type='text'
            status={false}
            icon={<FontAwesomeIcon icon={FontsIcon.faUser} />}
            valor={registerName}
            aoAlterado={valor => setRegisterName(valor)}
          />
          <Input
            id='inputEmail'
            label='E-mail'
            placeholder='Digite o e-mail'
            required={true}
            type='email'
            status={false}
            valor={registerEmail}
            aoAlterado={valor => setRegisterEmail(valor)}
          />
          <Input
            id='inputPassword'
            label='Password'
            placeholder='Digite a senha'
            required={true}
            type='password'
            status={false}
            valor={registerPassword}
            aoAlterado={valor => setRegisterPassword(valor)}
          />
          <Option
            options={[{ valor: 'admin', label: 'Admin' }, { valor: 'user', label: 'User' }]}
            idSelect='roleEmployee'
            required={true}
            valor={registerRole.valor}
            aoAlterado={valor => setRegisterRole(valor)}
          />
          <div className={style.menuPrincipal__register__actions}>
            {!showRegister && <Botao
              icon={<FontAwesomeIcon icon={FontsIcon.faCancel}/>}
              children='Cancelar'
              style={{backgroundColor: '#8b8b8b', color: 'white'}}
            />}
            <Botao
              icon={<FontAwesomeIcon pulse={loadLogin} icon={loadLogin ? FontsIcon.faSpinner : FontsIcon.faSave} />}
              children={showRegister ? 'Cadastrar' : 'Atualizar'}
              disabled={!registerEmail || !registerName || !registerPassword && showRegister || registerRole.label == "Selecione"}
            />
          </div>
          {<span style={{ display: (showP ? 'block' : 'none') }}>Erro ao realizar requisição!!</span>}
        </form>
      </aside>
    </section>
  )
}