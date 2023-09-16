"use client"

import { useState } from 'react'
import Image from 'next/image'
import logo from './../../../public/fakelogo.png'
import Link from 'next/link'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'



export default async function Header({ lang }: { lang: Locale }) {

    const { navigation } = await getDictionary(lang)

    const [navbar,setNavbar] = useState(true) 

    const handleClick = () => { setNavbar(!navbar) }

return (    
    
    <header className={`w-full h-[230px] flex md:flex-col justify-between  items-center px-32 mx-auto l:flex-col lg:flex-row`}>
        
        <Image src={logo} alt="Mubaader Services" className='w-[120px] h-[150px] p-2'/>
        
        <nav className='hidden md:flex flex-col ml-1 justify-center items-center md:flex-row gap-x-6'>
                <ul className={`${lang === "Arabic"? 'flex flex-row-reverse' : ''}  'text-[16px] gap-y-4'} flex items-center justify-center gap-x-4 text-[13px] md:text-[15px] transition duration-500`}>
                    <li className='text-white rounded-xl bg-blue-600 py-2 px-3 text-xl '><Link href={`/${lang}`}>{navigation.home}</Link></li>
                    <li className='text-white rounded-xl bg-red-600 py-2 px-3 text-xl '><Link href={`/${lang}/firstpage`}>{navigation.firstpage}</Link></li>
                    <li className='text-white rounded-xl bg-green-600 py-2 px-3 text-xl'><Link href={`/${lang}/secondpage`}>{navigation.secondpage}</Link></li>
                    <li className='hover:text-cyan-500 py-2 px-3'><LocaleSwitcher /></li>
                </ul>
                
        </nav>  

        <div onClick={handleClick} className='md:hidden transition duration-300'>
                {
                  navbar ? <IoMdMenu size={35} className='bg-gray-200 rounded-lg'/> :<IoMdClose size={30}/>
                }
        </div>      

       {
            navbar ? 
            
                <div className='hidden'>
                     <ul className={`${lang === 'Arabic'? 'flex-row-reverse' : ''}  'text-[16px] gap-y-4'} flex flex-col md:flex-row items-center justify-center gap-x-4 text-[13px] md:text-[15px] transition duration-500`}>
                       <li className='hover:text-cyan-500'><Link href={`/${lang}`}>{navigation.firstpage}</Link></li>
                       <li className='hover:text-cyan-500'><Link href={`/${lang}/secondpage`}>{navigation.secondpage}</Link></li>
                       <li className='hover:text-cyan-500'><LocaleSwitcher /></li>
                    </ul>       
                </div>
              :
                <div className='hidden'>
                     <ul className={`${lang === 'Arabic'? 'flex-row-reverse' : ''}  'text-[16px] gap-y-4'} flex flex-col md:flex-row items-center justify-center gap-x-4 text-[13px] md:text-[15px] transition duration-500`}>
                       <li className='hover:text-cyan-500'><Link href={`/${lang}`}>{navigation.firstpage}</Link></li>
                       <li className='hover:text-cyan-500'><Link href={`/${lang}/secondpage`}>{navigation.secondpage}</Link></li>
                       <li className='hover:text-cyan-500'><LocaleSwitcher /></li>
                    </ul>       
                </div>         
        }

    </header>    
  ) 
}
