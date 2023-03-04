import { httpHeadersFactory } from '../factory/http.factory'

export class UsersHttpHelper {
  static getAll() {
    return new Promise((resolve, reject) => {
      fetch('https://back-fun.onrender.com/users', {
        method: 'GET',
        headers: httpHeadersFactory()
      })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject)
    })
  }
}