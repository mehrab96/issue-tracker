'use client';
import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React from 'react';

const NewIssuePage = () => {
  return (
    <div className='grid gap-2 grid-cols-1 max-w-xl'>
        <TextFieldRoot>
            <TextFieldInput placeholder='title'></TextFieldInput>
        </TextFieldRoot>
        <SimpleMDE placeholder='description'></SimpleMDE>
        <Button className='w-40'>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage