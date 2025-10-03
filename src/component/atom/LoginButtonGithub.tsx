"use client"

import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa";

const LoginButtonGithub = () => {  
  return (
    <button onClick={() => signIn('github')} className="cursor-pointer bg-primary px-6 py-2 rounded-md text-bg flex gap-2 items-center font-semibold">
      <FaGithub className="text-xl" />
      Github
    </button>
  )
}

export default LoginButtonGithub