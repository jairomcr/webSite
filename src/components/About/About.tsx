import React from 'react'
import { MotionTransition } from '../MotionTranstion'
import Image from 'next/image'

export const About = () => {
  return (
    <div id='about' className='grid items-center py-20 md:grid-cols-2 lg:py-52' >
        <MotionTransition>
            <Image src='/assets/about.png' alt='About' width={600} height={400}  />
        </MotionTransition>
        <div className='md:pr-20' >
            <h2 className='mb-10 text-4xl font-extrabold '>Hemos estado <span className='text-pink-400' > mejorando nuestro producto</span> durante años</h2>
            <p className='mb-10' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio provident facere a iste iusto pariatur expedita. Voluptatibus incidunt voluptatem totam unde esse rerum molestias fugit odio nostrum sequi? Ullam, animi!</p>

            <button className='px-8 py-3 bg-pink-400 rounded-xl text-white' >Empieza ya</button>
        </div>
    </div>
  )
}
