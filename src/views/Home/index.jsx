import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Lista from '../../components/Lista';
import { UsersHttpHelper } from '../../helpers/usersHttp'


export default function Home() {
  const [employess, setEmployees] = useState([]);
  const [employeeAtual, setEmployeeAtual] = useState([]);

  const populateUsers = async () => {
    const result = await UsersHttpHelper.getAll();
    setEmployees(result);
  }

  useEffect(() => {
    populateUsers()
  }, [])

  function aoRegistrarEmployee(employee) {
    setEmployees([...employess, employee])
    populateUsers();
  }

  function aoRemoverEmployee(employee) {
    setEmployees(employess.filter(e => e._id !== employee._id))
  }

  function aoEditEmployee(employee) {
    setEmployeeAtual(employee)
  }

  return (
    <div>
      <Header />
      <Menu
        setNewEmployees={employee => aoRegistrarEmployee(employee)}
        setEditEmployees={employeeAtual}
      />
      <Lista
        employess={employess}
        setRemoveEmployees={employee => aoRemoverEmployee(employee)}
        setEditEmployees={employee => aoEditEmployee(employee)}
      />
    </div>
  )
}