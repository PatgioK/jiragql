import React, { useEffect } from 'react'
// import { Card, Button, Form } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';

const Login = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if(session) {
            router.push('/board')
            // signOut();
        }
    }, [session])

    return (
        <div>
            <button type='submit' onClick={() => signIn()}>Login</button>
                    
        </div>
    )
}
export default Login;