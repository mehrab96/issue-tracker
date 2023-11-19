import { Button, TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRoot, TableRow } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingIssuePage = () => {
    const issues = [1,2,3,4,5]; 
  return (
    <div>
        <div className='mb-4'>
          <Button><Link href="/issues/new">New Issue</Link></Button>
        </div>
    <TableRoot variant='surface'>
          <TableHeader>
            <TableRow>
              <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
              <TableColumnHeaderCell>Status</TableColumnHeaderCell>
              <TableColumnHeaderCell>Created</TableColumnHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map((issue , index) => 
            <TableRow key={index}>
              <TableCell><Skeleton/></TableCell>
              <TableCell><Skeleton/></TableCell>
              <TableCell><Skeleton/></TableCell>
            </TableRow>
            )}
          </TableBody>
        </TableRoot>
    </div>
  )
}

export default LoadingIssuePage