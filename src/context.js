import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Context = createContext()

const ContextProvider = ({ children }) => {


  const [array, setArray] = useState([])
  const getApi = () => {
    axios.get('https://64fb01c6cb9c00518f7a81e5.mockapi.io/ums')
      .then(res => setArray(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getApi()
  }, [])

  const [value, setValue] = useState('')
  const FilteredProducts = array.filter(drink => drink.title.toLowerCase().includes(value.toLowerCase()));





  return (
    <Context.Provider value={{
      setValue,
      value,
      FilteredProducts,
      array
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }