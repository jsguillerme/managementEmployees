import style from './botao.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';

export default function Botao({type, children, disabled, icon, ...props}) {

  return (
    <button
      {...props}
      className={style.btnStyle}
      type={type}
      disabled={disabled}
      >
      <span>{icon}</span>
      {children}
    </button>
  )
}