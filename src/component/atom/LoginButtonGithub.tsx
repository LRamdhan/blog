"use client"

import { signIn } from "next-auth/react"

const LoginButtonGithub = () => {  
  return (
    <button onClick={() => signIn('github')}>Github</button>
  )
}

export default LoginButtonGithub