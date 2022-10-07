import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import LoginBtn from '../loginbtn';

export const NavBar = () => {
    const { data: session } = useSession();
    console.log(session)

    if(!session) {
        return (
            <button onClick={() => signIn()}>Sign In</button>
        )
    }
    
  return (<>
    <div className='flex-row'> signed in as {session.user!.name}

    <button onClick={() => signOut()}>Sign Out</button>
    {/* <LoginBtn /> */}</div>
    </>
  )
}
