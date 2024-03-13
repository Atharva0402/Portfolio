'use client'
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { FaReact,FaNode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss,SiMongodb, SiRedux, SiJavascript, SiTypescript, SiBootstrap, SiExpress  } from "react-icons/si";
export default function Skills() {
 
  const skills =[
    {
      text:"React",
      Icon:FaReact,
    },
    {
      text:"Expressjs",
      Icon:SiExpress  ,
    }, 
    {
      text:"Mongo",
      Icon:SiMongodb ,
    },
    {
      text:"node",
      Icon:FaNode,
    },
    {
      text:"Git",
      Icon:FaGithub,
    },
    {
      text:"Tailwindcss",
      Icon:SiTailwindcss,
    },
   
    {
      text:"Redux",
      Icon:SiRedux ,
    },
    {
      text:"JavaScript",
      Icon:SiJavascript  ,
    },{
      text:"Typescript",
      Icon:SiTypescript  ,
    }, 
  ]
   
 
 
 
 
 
 
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills 🔨'
        className='flex flex-col items-center justify-center -rotate-6 page'
        />
        <HoverEffect items={skills}/>
    </div>
  )
}
