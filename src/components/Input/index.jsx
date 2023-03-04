import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';

import style from './input.module.scss';

export default function Input(props) {

  const {
    id,
    label = 'email',
    icon = <FontAwesomeIcon icon={FontsIcon.faEnvelope}/>,
    placeholder,
    required,
    type = 'email',
    status = true,
    aoAlterado,
    valor
  } = props

  const aoDigitado = (event) => {
    aoAlterado(event.target.value)
  }

  return (
    <fieldset className={style.fieldset}>
      <legend className={style.fieldset__legenda}>{label}</legend>
      <div className={style.fieldset__container}>
        <span>
          {icon}
        </span>
        <input
          className={style.fieldset__container__input}
          type={type}
          required={required}
          placeholder={placeholder}
          value={valor}
          onChange={aoDigitado}
        />
      </div>
      {status ? <p>Opsss...acho que essa informação está incorreta!</p> : ''}
    </fieldset>
  )
}