'use client';
import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React, {  } from 'react';
import { useForm, Controller } from "react-hook-form"
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
    title: string
    description: string
}

const NewIssuePage = () => {
    const router = useRouter();
    const {
        register,
        control,
        handleSubmit
      } = useForm<IssueForm>();


  return (
    <form onSubmit={handleSubmit(async(data) => {
        await axios.post('/api/issues' , data);
        router.push('/issues'); 
    })} className='grid gap-2 grid-cols-1 max-w-xl'>
        <TextFieldRoot>
            <TextFieldInput placeholder='title' {...register('title')}></TextFieldInput>
        </TextFieldRoot>
        <Controller 
            name='description'
            control={control}
            render={({field}) => <SimpleMDE {...field} placeholder='description'/>}
         />
        <Button className='w-40'>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage