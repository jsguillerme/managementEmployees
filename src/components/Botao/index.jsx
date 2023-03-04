import style from './botao.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';

export default function Botao(props) {

  const {
    icon = <FontAwesomeIcon icon={FontsIcon.faSignIn}/>,
    type,
    children,
    disabled  
  } = props

  return (
    <button
      className={style.btnStyle}
      type={type}
      disabled={disabled}
      >
      <span>{icon}</span>
      {children}
    </button>
  )
}