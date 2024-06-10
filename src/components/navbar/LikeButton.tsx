'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { AsyncResource } from 'async_hooks';
import { toggleLikeMember } from '@/app/actions/likeActions';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type Props={
    targetId: string;
    hasLiked: boolean;
}

export default function LikeButton({targetId,hasLiked}: Props) {
    const router = useRouter();

    async function toogleLike(){
      //console.log(targetId);
        await toggleLikeMember(targetId,hasLiked);
        router.refresh();
    }
  return (
    <div onClick={toogleLike} className='relative hover:opacity-80 transition cursor-pointer'>
        <AiOutlineHeart size={28} className='fill-white absolute -top-[2px] -right-[2px]'/>
        <AiFillHeart size={24} className={hasLiked? 'fill-rose-500' : 'fill-neutral-500/70'}/>
    </div>
  )
}


