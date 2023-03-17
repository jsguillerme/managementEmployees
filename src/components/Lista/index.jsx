import Employee from '../Employee';
import style from './lista.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Lista({ employess = [], setRemoveEmployees, setEditEmployees }) {

  if (employess.length > 0) {
    return (<section className={style.lista}>
      <h3>Lista de Funcionários</h3>
      <div className={style.lista__employess}>
        {employess.map(employee => <Employee
          key={uuidv4()}
          setRemoveEmployees={employee => setRemoveEmployees(employee)}
          setEditEmployees={employee => setEditEmployees(employee)}
          _id={employee._id}
          nome={employee.name}
          role={employee.role}
          email={employee.email}
        />)}
      </div>
    </section>)
  } else if (localStorage.getItem('token')) {
    return <h2 style={{ textAlign: 'center' }}>
      Infelizmente você não possui nenhum funcionário ainda 😢
    </h2>
  } else {
    return <h2 style={{ textAlign: 'center' }}>
      Você precisa está autenticado! Por favor, saia e entre com seu login. 😢
    </h2>
  }
}