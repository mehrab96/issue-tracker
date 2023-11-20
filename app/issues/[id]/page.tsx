import prisma from '@/prisma/client'
import delay from 'delay';
import { notFound } from 'next/navigation';
import React from 'react'
// import { number } from 'zod';

interface Props {
    params: {id: string}
}

const IssueDetailPage = async ({params}: Props) => {

    // if (typeof params.id != 'number') return notFound();

    const issue = await prisma.issue.findUnique({where : {id: parseInt(params.id)}});

    if(!issue) return notFound();

    await delay(1000);

  return (
    <div>
        <p>{issue.title}</p>
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
    </div>
  )
}

export default IssueDetailPage