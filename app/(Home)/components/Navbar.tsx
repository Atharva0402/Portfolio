import React from 'react'
import Link from 'next/link'



import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiStackedit } from "react-icons/si";
import { cn } from '@/lib/utils';

export default function Navbar({className}:{className?:string}) {
  
  const socials = [
    {
      link: "https://www.linkedin.com/in/atharva-kadam-07b101228/",
      label:"Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/Atharva0402/",
      label:"Gitub",
      Icon: SiGithub,
    },{
      link: "https://drive.google.com/file/d/1OJMDDb9yihiiB0pORTu0ywOK-NG6CwdN/view?usp=drive_link",
      label:"Resume",
      Icon: SiStackedit
    },
  ]
  

  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down"  ,className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Atharva Kadam 🤖</h1>
        <div className='flex items-center gap-5'>
          {
            socials.map((social,index)=>{
              const Icon = social.Icon

              return <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className='w-5 h-4 hover:scale-125 transition-all'/>
              </Link>
            })
          }
        </div>
    </nav>
  )
}
