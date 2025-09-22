"use client"

import { signIn } from "next-auth/react"


const LoginButton = () => {  
  return (
    <button onClick={() => signIn('github')}>Github</button>
  )
}

export default LoginButton