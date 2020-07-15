
// Temp users.
const userList = [
  {
    username: 'user1',
    password: 'pass',
    roles: ['admin']
  },
  {
    username: 'user2',
    password: 'pass',
    roles: ['role1']
  },
  {
    username: 'user3',
    password: 'pass',
    roles: ['role2']
  },
  {
    username: 'user4',
    password: 'pass',
    roles: ['role1', 'role2', 'role3']
  }
]

class AuthService {
  login (user) {
    const userFound = userList.find(element => element['username'] === user.username)

    if (userFound && userFound.password === user.password) {
      localStorage.setItem('user', JSON.stringify(userFound))
      return true
    } else {
      return false
    }
  }

  logout () {
    localStorage.removeItem('user')
  }
}

export default new AuthService()
