import { createContext, useEffect, useState } from 'react'

const Context = createContext({})

export function UserContextProvider ({ children }) {
  const [user, setUser] = useState(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      return JSON.parse(loggedUserJSON)
    }
    return null
  })
  useEffect(() => {
    console.log(user)
  }, [user])
  return <Context.Provider value={ { user, setUser } }>
        {children}
      </Context.Provider>
}

export default Context
