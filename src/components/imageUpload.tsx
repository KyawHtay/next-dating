'use client';
import { CldUploadButton } from 'next-cloudinary';
import React from 'react';
import { HiPhoto } from 'react-icons/hi2';

function ImageUploadButton() {
  return (
   <CldUploadButton options={{maxFiles:1}}
   onSuccess={(res)=> console.log(res)} 
   signatureEndpoint='/api/sign-image'
   uploadPreset='next-dating'
   className='flex items-center gap-2 bg-secondary text-white rounde-lg  py-2 px-4 hover:bg-secondary/70'>

    <HiPhoto  size={28}/>
    Upload new image

   </CldUploadButton>
  )
}

export default ImageUploadButton