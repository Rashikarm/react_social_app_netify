import React from 'react'

const Footer = () => {
  const today=new Date()
  return (
    <div>
      <footer className='Footer'>
        <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
    </div>
  )
}

export default Footer
