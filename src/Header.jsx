import React from 'react'

const Header = ({title}) => {
    
  return (
    <header className="text-center py-3">
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title:"To Do List"
}


export default Header