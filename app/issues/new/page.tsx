import FormNewIssue from "@/app/components/issue/FormNewIssue"
import React from 'react';


const NewIssuePage = () => {




  return <div><FormNewIssue/></div>;


}

export async function generateMetadata(){
  return {
    title: 'Issue Tracker - New Issues',
    description: 'description Issue Tracker - New Issues'
  }
}


export default NewIssuePage