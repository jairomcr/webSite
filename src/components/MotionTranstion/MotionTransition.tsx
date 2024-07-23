'use client'
import {motion} from 'framer-motion';


export const transtionsMotion = {
    transition: {
        dutarion:3,
        type:'spring'
    },
    initial: {
        opacity:0,
        bottom:'5rem',
        transform: 'translateY(200px)'   
    },
    whileInView: {
        opacity:1,
        transform:'translateY(0px)'
    }
}

export const MotionTransition = ({children}:{children:React.ReactNode}) => {
  return (
    <motion.div 
    transition={transtionsMotion.transition}
    initial={transtionsMotion.initial}
    whileInView={transtionsMotion.whileInView} >{children}</motion.div>
  )
}
