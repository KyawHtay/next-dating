import Link from 'next/link'
import React from 'react'

export default function MembersPage() {
  return (
    <div>
        <h3 className='text-3xl'>MembersPage</h3>
        <Link href='/'>Go back home</Link>
    </div>
  )
}