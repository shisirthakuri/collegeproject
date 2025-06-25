import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Button = ({css,text,onclick}) => {
  const navigate =useNavigate()
  return (
<motion.button
    className={css}
    whileHover={{ scale: 1.05, opacity: 0.9 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    onClick={()=>navigate(onclick)}
  >
    {text}
  </motion.button>
  )
}

export default Button
