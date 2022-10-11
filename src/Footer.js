import React from 'react'

const Footer = ({ length }) => {

  return (
    <footer>
      {length} { length === 1 ? "item" : "items" } in the list
      
    </footer>
  )
}

export default Footer