import React from 'react';
import { Button, TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRoot, TableRow } from '@radix-ui/themes';
import Link from 'next/link';
import prisma from '@/prisma/client';
import IssueStatusBadge from '../components/IssueStatusBadge';
import delay from 'delay';

const IssuesPage = async () => {
const issues = await prisma.issue.findMany();
await  delay(2000);

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
              <TableCell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              </TableCell>
              <TableCell><IssueStatusBadge status={issue.status}/></TableCell>
              <TableCell>{issue.createdAt.toDateString()}</TableCell>
            </TableRow>
            )}
          </TableBody>
        </TableRoot>
    </div>
  )
}

export default IssuesPage