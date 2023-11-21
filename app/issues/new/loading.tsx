import { Button, TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRoot, TableRow } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingIssuePage = () => {
    const issues = [1,2,3,4,5]; 
  return (
    <div>
    <Skeleton/>
    <Skeleton/>
    </div>
  )
}

export default LoadingIssuePage