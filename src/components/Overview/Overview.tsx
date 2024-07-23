import { dataSocialNetworks } from '@/data/dataSocialNetworks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Overview = () => {
  return (
    <div id='overview' className='p-5 mt-3 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 md:px-24 md:py-52' >
        <div className='items-center md:grid md:grid-cols-2'>
            <div>
                <h1 className='text-4xl font-bold text-white md:leading-snug md:text-6xl'>Desarrolla tus skills <br /> para el futuro </h1>
                <p className='mt-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In delectus consequatur accusantium amet neque quam dolor, animi sequi sunt expedita velit laudantium culpa, eveniet recusandae. Minus sunt eveniet earum harum!</p>
                <div className='flex justify-start gap-4 my-10'>
                    {
                       dataSocialNetworks.map(({id,name,icon,link})=>(
                            <Link href={link} key={id} target='_blank' rel='noreferrer' >
                                <Image src={`/svg/${icon}.svg`} alt={name} width={40} height={40} />
                            </Link>
                       )) 
                    }                    
                </div>
                <div>
                    <button className='px-8 py-3 mr-10 mb-5 text-white bg-pink-400 rounded-xl' > Empienza ya</button>
                    <button className='px-8 py-3 mr-10 mb-5 text-white bg-pink-400 rounded-xl' > Tengo cupon</button>
                </div>
            </div>
            <div>
                <Image src='/assets/overview.png' alt='overview' width={350} height={500}/>
            </div>
        </div>
    </div>
  )
}
