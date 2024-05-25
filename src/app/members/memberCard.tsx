import { Card ,CardFooter,Image} from '@nextui-org/react'
import { Member } from '@prisma/client'
import React from 'react'


type Props={
    member: Member
}
export default function memberCard({member}: Props) {
  return (
    <Card fullWidth>
        <Image
            isZoomed
            alt={member.name} 
            width={300}
            src ={member.image || '/images/user.png'}
            className='aspect=square object-cover'
        />
        <CardFooter>
            <div className='flex flex-col text-white'></div>
        </CardFooter>
    </Card>
  )
}
