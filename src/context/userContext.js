import { createContext, useEffect, useState } from 'react'

const Context = createContext({})

export function UserContextProvider ({ children }) {
  const [isLogged, setLogged] = useState(false)
  const [user, setUser] = useState(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      setLogged(true)
      return JSON.parse(loggedUserJSON)
    }
    return null
  })
  useEffect(() => {
    console.log(user)
  }, [user])
  return <Context.Provider value={ { user, setUser, isLogged, setLogged } }>
        {children}
      </Context.Provider>
}

export default Context
