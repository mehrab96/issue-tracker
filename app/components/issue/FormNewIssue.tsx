"use client"
import { Button, CalloutRoot, CalloutText, Text, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import "easymde/dist/easymde.min.css";
import React, { useState  } from 'react';
import { useForm, Controller } from "react-hook-form"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {zodResolver} from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import {z} from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import dynamic from 'next/dynamic';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

type IssueForm = z.infer<typeof createIssueSchema>
const FormNewIssue = () => {
    const [error , setError] = useState('');
    const [isSubmitting , setSubmitting] = useState(false);
    const router = useRouter();
    
 

    const {
        register,
        control,
        handleSubmit,
        formState : {errors}
      } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
      });

    const submitIssue = handleSubmit(async (data) => {
            setSubmitting(true);
            try{
                await axios.post('/api/issues' , data);
                router.push('/issues');
                setSubmitting(false);
            }catch(error){
                setError('An unexpected error occurred.');
                setSubmitting(false);
            }
    });

  return (
    <div>
        {error && <CalloutRoot color='red' className='mb-2'><CalloutText>{error}</CalloutText></CalloutRoot>}
        <form onSubmit={submitIssue} className='grid gap-2 grid-cols-1 max-w-xl'>
            <TextFieldRoot>
                <TextFieldInput placeholder='title' {...register('title')}></TextFieldInput>
            </TextFieldRoot>
            {errors.title && <ErrorMessage>{errors.title?.message}</ErrorMessage>}
            <Controller 
                name='description'
                control={control}
                render={({field}) => (
                    <>
                       <SimpleMDE {...field} placeholder='description' />
                        {errors.description && <ErrorMessage>{errors.description?.message}</ErrorMessage>}
                    </>
                )
                }
            />
            {errors.description && <ErrorMessage>{errors.description?.message}</ErrorMessage>}
            <Button disabled={isSubmitting} className='w-52'>Submit New Issue {isSubmitting && <Spinner/>}</Button>
        </form>
    </div>
  )
}

export default FormNewIssue