"use client"

import { signOut } from "next-auth/react"

const LogoutButton = () => {

  return (
    <button onClick={() => signOut({ callbackUrl: '/login' })}>Logout</button>
  )
}

export default LogoutButton