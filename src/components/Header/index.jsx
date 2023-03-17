import style from './header.module.scss';
import Botao from '../Botao/index'
import iconPng from '../../assets/images/icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function handleBackToLogin() {
    localStorage.clear();
    navigate('/')
  }

  return (
    <header className={style.header}>
      <div className={style.header__left}>
        <img src={iconPng} alt="imagem de um saco de dinheiro" />
        <Botao
          icon={<FontAwesomeIcon icon={FontsIcon.faUser} />}
          children="Perfil"
          type="button"
        />
      </div>
      <div className={style.header__right}>
        <Botao
          icon={<FontAwesomeIcon icon={FontsIcon.faSignOut} />}
          children="Sair"
          type="button"
          onClick={ () => handleBackToLogin()}
        />
      </div>
    </header>
  )
}