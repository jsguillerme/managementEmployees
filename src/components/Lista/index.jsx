import Employee from '../Employee';
import style from './lista.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Lista({employess = []}) {

  if(employess.length > 0) {
    return (<section className={style.lista}>
      <h3>Lista de Funcionários</h3>
      <div className={style.lista__employess}>
        {employess.map(employe => <Employee
          key={uuidv4()}
          nome={employe.name}
          role={employe.role}
          email={employe.email}
        />)}
      </div>
    </section>)
  } else {
    return <h2 style={{textAlign: 'center'}}>
    Infelizmente você não possui nenhum funcionário ainda 😢
  </h2>
  }
}