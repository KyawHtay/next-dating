
import React from 'react'
import ListsTab from './ListsTab'
import { fetchCurrentUserLikeIds, fetchLikedMember } from '../actions/likeActions'


export default async function ListPage({searchParams}:{searchParams:{type:string}}) {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = await fetchLikedMember(searchParams.type)

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />

    </div>
  )
}
