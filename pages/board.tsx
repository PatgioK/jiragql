import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router';
import { useSession, signOut } from 'next-auth/react';

const Board = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login')
      // signOut();
    }
  }, [session])

  console.log(session)
  return (
    <>
      <div>board</div>
    </>
  )
}

export default Board