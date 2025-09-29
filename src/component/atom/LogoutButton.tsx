"use client"

import { signOut } from "next-auth/react"

const LogoutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: '/login' })} className="bg-bg text-text px-5 py-1 rounded-md font-semibold">Logout</button>

  )
}

export default LogoutButton