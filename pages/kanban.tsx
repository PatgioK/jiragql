import { useSession } from 'next-auth/react'
import router from 'next/router'
import React, { useEffect } from 'react'

const Kanban = () => {
  const { data: session } = useSession();

    useEffect(() => {
        if (session) {
          console.log(session)
            router.push('/login')
            // signOut();
        }
    }, [session])

  return (
    <div>kanban</div>
  )
}

export default Kanban;