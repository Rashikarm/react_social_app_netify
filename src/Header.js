import { useContext } from 'react'
import { FaLaptop, FaMobileAlt } from 'react-icons/fa'
import DataContext from './context/DataContext'

const Header = ({title}) => {
  const {width}=useContext(DataContext)
  return (
   <header className='Header'>
    <h1>{title}</h1>
    {width < 768?<FaMobileAlt/>
    :width < 992?<FaMobileAlt/>
    :<FaLaptop/>}
   </header>
  )
}

export default Header
