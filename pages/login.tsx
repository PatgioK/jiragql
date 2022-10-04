import React, { useEffect } from 'react'
// import { Card, Button, Form } from 'react-bootstrap'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';

const Login = () => {
    const { data: session } = useSession();
    const router = useRouter();

    var link;
    if (typeof window !== "undefined") {
        link = window.location.origin + "/register";
        console.log(link)
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
                        />
                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder-slate-400 placeholder:italic focus:outline-none"
                        />
                    </div>

                    <button
                        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
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