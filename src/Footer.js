import React from 'react'

const Footer = ({ length }) => {
  const date = new Date();
  return (
    <footer>
        <p>{length===0 ? 'No list items' : (length===1 ? '1 List item' : `${length} List items`)}.</p>
    </footer>
  )
}

export default Footer