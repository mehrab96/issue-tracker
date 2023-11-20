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
  const currentPass = usePathname();
  const {status , data: session} = useSession();

  const links: Links[] = [
    {label: 'Dashboard' , href: '/'},
    {label: 'Issues' , href: '/issues'},
  ]

  return (
    <nav className='px-4 py-4  border-b mb-5'>
      <Container>
      <Flex justify="between">
        <Flex align="center" gap="3">
          <Link className='ml-0' href="/"><AiFillBug/></Link>
          <ul className='flex ml-0 space-x-6'>
          {links.map((link , index) =>
           <li className={`${link.href == currentPass ? 'text-red-600' : ''}`} key={index}>
            <Link href={link.href}>{link.label}</Link>
            </li>
           )}
        </ul>
        </Flex>
        <Box>
          {status === "authenticated" && 
          <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Avatar className='cursor-pointer' src={session?.user?.image!} fallback="?" size="3" radius='full'></Avatar>
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
          {status === "unauthenticated" && <Link href="/api/auth/signin">Login</Link>}
        </Box>
      </Flex>
      </Container>
    </nav>
  )
}

export default NavBar