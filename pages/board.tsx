import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router';
import { useSession, signOut } from 'next-auth/react';

import { gql, useQuery } from '@apollo/client';
import AddProjectModal from '../components/modals/AddProjectModal';

const AllUsersQuery = gql`
  query {
      AllUsersQuery {
        id
        name
        email
      }
  }
`



const Board = () => {
  const { data: session } = useSession();

  // const router = useRouter();
  // useEffect(() => {
  //   if (!session) {
  //     router.push('/login')
  //     // signOut();
  //   }
  // }, [session])
  // // console.log(session)



  //   const { data, loading, error } = useQuery(AllUsersQuery, {
  //     onCompleted: data => {
  //         console.log(data)
  //     }
  // });
  // if (loading) return <div> Loading... </div>
  // if (error) return <div> Oops something went wrong: {error.message}</div>


  return (
    <>
    <AddProjectModal></AddProjectModal>
      <div>div</div>
    </>
  )
}

export default Board