import React from 'react'

const Button = ({css,text,onclick}) => {
  return (
<button className={css} onClick={onclick}>
           {text}
          </button>
  )
}

export default Button
