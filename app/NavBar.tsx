'use client'
import Link from 'next/link';
import React from 'react';
import {AiFillBug} from 'react-icons/ai';
import {usePathname} from 'next/navigation'
import { useSession } from 'next-auth/react';
import { Avatar, Box,Text, Container, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRoot, DropdownMenuTrigger, Flex, DropdownMenuItem } from '@radix-ui/themes';


interface Links {
  label: string,
  href: string,
}


const NavBar = () => {
 
  return (
    <nav className='px-4 py-4  border-b mb-5'>
      <Container>
      <Flex justify="between">
        <Flex align="center" gap="3">
          <Link className='ml-0' href="/"><AiFillBug/></Link>
          <NavLinks/>
        </Flex>
        <AuthStarus/>
      </Flex>
      </Container>
    </nav>
  )
}

const NavLinks = () => {
  const currentPass = usePathname();

  const links: Links[] = [
    {label: 'Dashboard' , href: '/'},
    {label: 'Issues' , href: '/issues'},
  ];

  return (
    <ul className='flex ml-0 space-x-6'>
      {links.map((link , index) =>
        <li className={`${link.href == currentPass ? 'text-red-600' : ''}`} key={index}>
        <Link href={link.href}>{link.label}</Link>
        </li>
      )}
    </ul>
  )
}

const AuthStarus = () => {
  const {status , data: session} = useSession();

  if(status == 'loading')
    return null;

  if(status == 'unauthenticated') 
    return <Link href="/api/auth/signin">Login</Link>; 

  return (
    <Box>
          {status === "authenticated" && 
          <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Avatar referrerPolicy='no-referrer' className='cursor-pointer' src={session?.user?.image!} fallback="?" size="3" radius='full'></Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Text>{session?.user?.email}</Text>          
            </DropdownMenuLabel> 
            <DropdownMenuItem>
             <Link href="/api/auth/signout">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
          }
    </Box>
  )
}

export default NavBar