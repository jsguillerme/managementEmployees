import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import profileDefault from '../../assets/images/profile.png'

import Botao from '../Botao';
import style from './employee.module.scss';
import { httpHeadersFactory } from '../../factory/http.factory';

export default function Employee(props) {

  const {
    _id,
    nome,
    role,
    email,
    setRemoveEmployees,
    setEditEmployees
  } = props

  const editEmployee = (id) => {
    event.preventDefault();
    const employee = {
      _id,
      nome,
      role,
      email
    }
    setEditEmployees(employee)
  }

  const handleRemoveEmployee = async (id) => {
    if (window.confirm('Você tem certeza que deseja remover o usuário selecionado?')) {

      const response = await fetch(`https://back-fun.onrender.com/users/${id}`, {
        method: 'DELETE',
        headers: httpHeadersFactory()
      })

      if (response.status !== 200) {
        alert('Não foi possível remover o usuário. Por favor, tente novamente!');
      } else {
        const employee = {
          _id,
          nome,
          role,
          email
        }
        setRemoveEmployees(employee)
        alert('Usuário removido com sucesso!');
      }
    } else {
      return;
    }
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
              onClick={() => editEmployee(_id)}
            />
            <Botao
              children=''
              icon={<FontAwesomeIcon icon={FontsIcon.faTrash} color='' />}
              onClick={() => handleRemoveEmployee(_id)}
            />
          </div>
        </section>
      </form>
    </div>
  )
}