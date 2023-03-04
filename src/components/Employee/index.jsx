import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import profileDefault from '../../assets/images/profile.png'

import Botao from '../Botao';
import style from './employee.module.scss';

export default function Employee(props) {

  const [dialog, setDialog] = useState(false);

  const {
    id,
    nome,
    role,
    email } = props

  const editEmployee = (event) => {
    event.preventDefault();
  }

  return (
    <div className={style.employee}>
      <form onSubmit={editEmployee}>
        <section className={style.employee__content}>
          <img src={profileDefault} alt="luffy de perfil" />
          <h3>{nome}</h3>
          <span>{email}</span>
          <span>{role}</span>
          <div className={style.employee__content__actions}>
            <Botao
              children='Editar'
              icon={<FontAwesomeIcon icon={FontsIcon.faPencil} />}
            />
            <Botao
              children=''
              icon={<FontAwesomeIcon icon={FontsIcon.faTrash} color='' />}
            />
          </div>
        </section>
      </form>
    </div>
  )
}