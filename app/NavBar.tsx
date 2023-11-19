'use client'
import Link from 'next/link';
import React from 'react';
import {AiFillBug} from 'react-icons/ai';
import {usePathname} from 'next/navigation'


interface Links {
  label: string,
  href: string,
}


const NavBar = () => {
  const currentPass = usePathname();
  const links: Links[] = [
    {label: 'Dashboard' , href: '/'},
    {label: 'Issues' , href: '/issues'},
  ]

  return (
    <nav className='px-4 flex space-x-6 h-14 items-center border-b mb-5'>
        <Link href="/ "><AiFillBug/></Link>
        <ul className='flex space-x-6'>
          {links.map((link , index) =>
           <li className={`${link.href == currentPass ? 'text-red-600' : ''}`} key={index}>
            <Link href={link.href}>{link.label}</Link>
            </li>
           )}
        </ul>
    </nav>
  )
}

export default NavBar