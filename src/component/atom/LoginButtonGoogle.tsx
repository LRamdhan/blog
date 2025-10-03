"use client"

import { signIn } from "next-auth/react"
import { FaGoogle } from "react-icons/fa";

const LoginButtonGoogle = () => {  
  return (
    <button onClick={() => signIn('google')} className="cursor-pointer bg-primary px-6 py-2 rounded-md text-bg flex gap-2 items-center font-semibold">
      <FaGoogle className="text-xl" />
      Google
    </button>
  )
}

export default LoginButtonGoogle