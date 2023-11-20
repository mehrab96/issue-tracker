'use client'
import Link from 'next/link';
import React from 'react';
import {AiFillBug} from 'react-icons/ai';
import {usePathname} from 'next/navigation'
import { useSession } from 'next-auth/react';
import { Box } from '@radix-ui/themes';


interface Links {
  label: string,
  href: string,
}


const NavBar = () => {
  const currentPass = usePathname();
  const {status , data: session} = useSession();

  const links: Links[] = [
    {label: 'Dashboard' , href: '/'},
    {label: 'Issues' , href: '/issues'},
  ]

  return (
    <nav className='px-4 flex space-x-6 h-14 items-center border-b mb-5'>
        <Link className='ml-0' href="/"><AiFillBug/></Link>
        <ul className='flex ml-0 space-x-6'>
          {links.map((link , index) =>
           <li className={`${link.href == currentPass ? 'text-red-600' : ''}`} key={index}>
            <Link href={link.href}>{link.label}</Link>
            </li>
           )}
        </ul>
        <Box className='justify-end mr-auto'>
          {status === "authenticated" && <Link href="/api/auth/signout">Logout</Link>}
          {status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
        </Box>
    </nav>
  )
}

export default NavBar