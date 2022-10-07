import React, { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import LoginBtn from '../loginbtn';
import { useRouter } from 'next/dist/client/router';

export const NavBar = () => {
  const { data: session } = useSession();
  console.log(session)

  const router = useRouter();

  const login = () => {
    router.push('/login');
  }


  if (!session) {
    return (
      <button onClick={() => login()}>Sign In</button>
    )
  }

  return (<>
    <div className='flex-row'> signed in as {session.user!.name}

      <button onClick={() => signOut()}>Sign Out</button>
      {/* <LoginBtn /> */}</div>
  </>
  )
}
