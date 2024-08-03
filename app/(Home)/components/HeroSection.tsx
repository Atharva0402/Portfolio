import Link from 'next/link'
import React from 'react'
import {MovingBorderBtn} from './ui/moving-border'
import Title from './Title'


export default function HeroSection() {
  return (
    <div  className=' min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
        <div className='space-y-10 text-center lg:text-left  '>
            <h1 className='text-4xl lg:text-7xl font-bold '>Nice to meet you! <br/>👋<span className='underline underline-offset-8 decoration-green-500'>{"I'm Atharva "} </span>  </h1>
            <p className='md:w-96 text-lg text-gray-300'>{" I'm a Full Stack Developer passionate about building modern web applications that users love. With expertise in Node.js, React, and a strong background in responsive web development, I strive to create seamless and intuitive user experiences. Let's connect and explore how we can create innovative solutions together!"}</p>
            <Link href={"mailto:atharvagkadam@gmail.com"} className='inline-block group'>
                <div>
                   <Title text='Contact me 📫'/>
                </div>
            </Link>
         
        </div>

        <div >
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                    <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                </div>
                
                <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                    <div className='w-32 h-32 rounded-full bg-green-500'></div>
                </div> 
                <div className='glow absolute top-[40%] right-[60%] -z-10'></div> 

            </div>
            <div className='  bottom-5 sm:bottom-14 left-0 sm:left-10'>

            <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
                <p>📢 Available for Work</p>
            </MovingBorderBtn>
           </div>
           
        </div>
    </div>
  )
}
