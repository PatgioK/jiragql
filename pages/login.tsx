import React, { useEffect, useState } from 'react'
// import { Card, Button, Form } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { data: session } = useSession();
    const router = useRouter();

    var link;
    if (typeof window !== "undefined") {
        link = window.location.origin + "/register";
        // console.log(link)
    }

    // useEffect(() => {
    //     if (session) {
    //         router.push('/board')
    //         // signOut();
    //     }
    // }, [session])

    const routeRegister = () => {
        router.push('/register')
    }


    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const handleLogin = async () => {
        const res = await signIn('credentials',
            {
                username,
                password,
                callbackUrl: `${window.location.origin}/board`,
                redirect: false,
            }
        )
        if (res?.error) handleError(res.error)
        if (res?.url) router.push(res.url);
    }

    const handleError = (errmsg: string) => {
        // setErrorMsg(errmsg);    ///Only returns "CredentialsSignin"
        setErrorMsg("Invalid Username or Password");
    }

    return (
        <>
            <main
                className="mx-auto flex min-h-screen w-full items-center justify-center bg-gradient-to-r  from-gray-900 to-indigo-500 text-white"
            >
                <section className="flex w-[30rem] flex-col space-y-10">
                    <div className="text-center text-4xl font-medium">Log In</div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="w-full border-none bg-transparent outline-none placeholder-slate-400 placeholder:italic focus:outline-none"
                            onChange={(e) => handleUsername(e)}
                            value = {username}
                        />
                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder-slate-400 placeholder:italic focus:outline-none"
                            onChange={(e) => handlePassword(e)}
                            value = {password}
                        />
                    </div>

                    <div>{errorMsg}</div>

                    <button
                        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                        onClick={handleLogin}
                    >
                        LOG IN
                    </button>


                    <p className="text-center text-lg">
                        No account?
                        <a onClick={routeRegister}

                            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
                        >      Create One</a
                        >
                    </p>
                </section>
            </main>
        </>
    )
}
export default Login;