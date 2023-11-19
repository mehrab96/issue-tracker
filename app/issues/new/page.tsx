'use client';
import { Button, CalloutRoot, CalloutText, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form"
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
    title: string
    description: string
}

const NewIssuePage = () => {

    const [error , setError] = useState('');

    const router = useRouter();
    const {
        register,
        control,
        handleSubmit
      } = useForm<IssueForm>();


  return (
    <div>
        {error && <CalloutRoot color='red' className='mb-2'><CalloutText>{error}</CalloutText></CalloutRoot>}
        <form onSubmit={handleSubmit(async(data) => {
            try{
                await axios.post('/api/issues' , data);
                router.push('/issues');
            }catch(error){
                setError('An unexpected error occurred.')
            }
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
    </div>
  )
}

export default NewIssuePage