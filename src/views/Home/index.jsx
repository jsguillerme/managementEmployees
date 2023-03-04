import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Lista from '../../components/Lista'
import { UsersHttpHelper } from '../../helpers/usersHttp';

export default function Home() {
  const [employess, setEmployees] = useState([]);

  const populateUsers = async () => {
    const result = await UsersHttpHelper.getAll();
    setEmployees(result)
  }

  useEffect(() => {
    populateUsers()
  }, [])

  function aoRegistrarEmployee(employee) {
    console.log('EMPLOYEE EVENT REGISTER: ', employee)
    setEmployees([...employess, employee])
  }

  return (
    <div>
      <Header />
      <Menu
        setNewEmployees={employee => aoRegistrarEmployee(employee)}
      />
      <Lista
        employess={employess}
      />
    </div>
  )
}