import style from './header.module.scss';
import Botao from '../Botao/index'
import cashPng from '../../assets/images/moneycash.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__left}>
        <img src={cashPng} alt="imagem de um saco de dinheiro" />
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
        />
      </div>
    </header>
  )
}