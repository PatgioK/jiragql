import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';
import { useSession, signOut } from 'next-auth/react';

import { gql, useQuery } from '@apollo/client';

const AllUsersQuery = gql`
  query {
      user{
        id
        name
        email
      }
  }
`

const Board = () => {
  const { data: session } = useSession();
  const { data, loading, error } = useQuery(AllUsersQuery);
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login')
      // signOut();
    }
  }, [session])
  // console.log(session)


  if (loading) return <div> Loading... </div>
  if (error) return <div> Oops something went wrong: {error.message}</div>

  return (
    <>
      <div>{data?.user.email}</div>
    </>
  )
}

export default Board