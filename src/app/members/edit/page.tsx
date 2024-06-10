import { CardBody, CardHeader, Divider } from '@nextui-org/react'
import { Member } from '@prisma/client'
import React from 'react'
import EditForm from './EditForm'
import { getAuthUserId } from '@/app/actions/authActions'
import { getMemberByUserId } from '@/app/actions/memberActions'
import { notFound } from 'next/navigation'



export default async function MemeberEditPage() {
    const userId = await getAuthUserId();

    const member = await getMemberByUserId(userId);
    if(!member) return  notFound();
  return (
    <>
    <CardHeader className='text-2xl font-semibold text-secondary'>
      Profile
    </CardHeader>
    <Divider/>
    <CardBody>
        <EditForm member={member} />
     
    </CardBody>
</>
  )
}
