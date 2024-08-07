import React from 'react'
import { AiFillDelete, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { PiSpinnerGap } from 'react-icons/pi';

type Props ={
    loading: boolean;
}

export default function StarButton({loading}: Props) {
  return (
    <div className='relative hover:opacity-80 transition cursor-pointer'>
        {!loading ?(
            <>
                <AiOutlineDelete size={32} className='fill-white absolute -top-[2px] -right-[2px]'/>
                <AiFillDelete size={28} className='fill-red-600'/>
            </>
        ):(
            <PiSpinnerGap size={32} className='fill-white animated-spin'/>
        )
        }
    </div>
  )
}
