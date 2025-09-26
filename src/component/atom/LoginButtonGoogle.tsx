"use client"

import { signIn } from "next-auth/react"

const LoginButtonGoogle = () => {  
  return (
    <button onClick={() => signIn('google')}>Google</button>
  )
}

export default LoginButtonGoogle