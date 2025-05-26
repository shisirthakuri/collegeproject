import React from 'react'
import { motion } from 'framer-motion';
const Button = ({css,text,onclick}) => {
  return (
<motion.button
    className={css}
    whileHover={{ scale: 1.05, opacity: 0.9 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
  >
    {text}
  </motion.button>
  )
}

export default Button
