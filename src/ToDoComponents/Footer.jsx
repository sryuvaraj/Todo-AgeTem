import React from 'react'

const Footer = ({length}) => {

    const currentFullDate = new Date()
    const currentYear = currentFullDate.getFullYear()

  return (

    <footer className='text-center mt-4'>
      <h1> {length} {length ===1 ? "item" : "items"}</h1>
        Copyright &copy; {currentYear}
    </footer>

  )
}

export default Footer