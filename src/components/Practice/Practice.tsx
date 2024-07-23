import React from 'react'
import { MotionTransition } from '../MotionTranstion'

export const Practice = () => {
  return (
      <MotionTransition>
            <div id='practice' className='grid items-center py-20 grid-cols-2 md:my-56' >
                <div className='md:pr-20' >
                    <h2 className='mb-10 text-4xl font-extrabold' >Puedes practicar a <br />cualquier hora <span className='text-pink-400'>que se adapte a ti</span> </h2>

                    <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi deleniti, et iste quam repellendus deserunt minus consequuntur totam nobis debitis, ratione corrupti quis dolorem similique laboriosam quia aut officiis cumque.</p>

                    <button className='px-8 py-3 text-white bg-pink-400 rounded-xl' >Empieza ya</button>
                </div>
                <video width={750} height={500} autoPlay muted loop>
                    <source src='/assets/business.mp4' type='video/mp4' />
                </video>
            </div>
      </MotionTransition>
  )
}
