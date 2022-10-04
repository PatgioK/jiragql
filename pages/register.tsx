import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($username: String!, $password: String!){
        create_user(username: $username, password: $password){
            username
            password
        }
    }
`

const Register = () => {

    const [username, setUsername] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')

    const [create_user, { data, loading, error }] = useMutation(CREATE_USER_MUTATION)
    // if (loading) return <div>Loading... </div>
    // if (error) return <div>Error: {error.message}</div>

    const handleUsername = (e) => {
        setUsername(e.currentTarget.value);
    }
    const handlePass1 = (e) => {
        setPass1(e.currentTarget.value);
    }
    const handlePass2 = (e) => {
        setPass2(e.currentTarget.value);
    }

    const registerCheck = (e) => {
        e.preventDefault()
        console.log('registercheck');
        console.log({ username, pass1, pass2 })
        if (pass1 == pass2) {
            create_user({
                variables: {
                    username: String(username),
                    password: String(pass1),
                }
            })
        }
    }

    return (
        <>
            <main
                className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900  text-white"
            >
                <section className="flex w-[30rem] flex-col space-y-10">
                    <div className="text-center text-4xl font-medium">Register</div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="text"
                            placeholder="Email or Username"
                            className="w-full border-none bg-transparent outline-none placeholder-slate-400 placeholder:italic focus:outline-none"
                            value={username}
                            onChange={((e) => handleUsername(e))}
                        />
                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none placeholder-slate-400 placeholder:italic focus:outline-none"

                            value={pass1}
                            onChange={((e) => handlePass1(e))}
                        />
                    </div>

                    <div
                        className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
                    >
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-none bg-transparent outline-none  placeholder-slate-400 placeholder:italic focus:outline-none"
                            value={pass2}
                            onChange={((e) => handlePass2(e))}
                        />
                    </div>

                    <button
                        className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
                        onClick={(e) => registerCheck(e)}
                    >
                        Register
                    </button>

                </section>
            </main>
        </>
    )
}


export default Register;