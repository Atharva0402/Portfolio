import React from 'react'
import { SiPython  ,SiOpencv,SiFlask ,SiNumpy  ,SiReactrouter,SiBootstrap, SiExpress ,SiNodedotjs ,SiReact ,SiMongodb, SiSocketdotio, SiFirebase ,SiFramer,SiTailwindcss ,SiNextdotjs  } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from './ui/direction-aware-hover'


export default function Project() {
  
    const projects=[

        // {
        //     title:"Blogging Site",
        //     tech:[SiReact,SiFirebase],
        //     link:"https://github.com/Atharva0402/Blogging_site",
        //     cover:"/Blogging_app.png",
        //     background: "bg-indigo-500",

        // },
        
        {
            title:"Cartopia E-commerce site ",
            tech:[SiReactrouter,SiBootstrap,SiMongodb,SiReact,SiNodedotjs,SiExpress],
            link:"https://cartopia-d6ei.onrender.com/",
            cover:"/Cartopia_2.png",
            background: "bg-green-500",

        },
        {
            title:"Talkify",
            tech:[SiReact,SiMongodb,SiNodedotjs,SiExpress,SiSocketdotio ],
            link:"https://github.com/Atharva0402/chat-app",
            cover:"/Talkify.png",
            background: "bg-indigo-500",

        },
        {
            title:"Blogging Site",
            tech:[SiReact,SiNodedotjs,SiExpress,SiFirebase ],
            link:"https://github.com/Atharva0402/Blogging_site",
            cover:"/Blogging.png",
            background: "bg-indigo-500",

        },
        // {
        //     title:"Sign Sense ",
        //     tech:[SiPython,SiOpencv,SiNumpy, SiFlask ,],
        //     link:"https://github.com/Atharva0402/SignSense-",
        //     cover:"/SignSense.png",
        //     background: "bg-green-500",

        // },
        {
            title:"kanban Board",
            tech:[SiNextdotjs,SiFramer ,SiReact,SiTailwindcss ],
            link:"https://kanban-board-eight-rho.vercel.app/",
            cover:"/kanban.png",
            background: "bg-green-500",

        }

    ]

    return (
        <div className='py-10 p-5 sm:=-0'>
            <Title text='Projects 🚀 '
                className='flex flex-col items-center justify-center rotate-6 page'
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-3'>
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index}>
                        <div className={cn('p-3 rounded-md', project.background)}>
                            <DirectionAwareHover
                                imageUrl={project.cover}
                                className='w-full space-y-5 cursor-pointer'
                            >
                                <div className='space-y-5'>
                                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-3'>
                                        {
                                            project.tech.map((Icon, index) => {
                                                return <Icon
                                                    key={index}
                                                    className='w-8 h-8'
                                                />
                                            })
                                        }
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}
