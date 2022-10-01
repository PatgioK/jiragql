import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {
    const { data: session } = useSession();
    console.log(session)

    if(!session) {
        return (
            <button onClick={() => signIn()}>Sign In</button>
        )
    }
    
  return (<>
    <div> signed in as {session.user!.email}</div>

    <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}
