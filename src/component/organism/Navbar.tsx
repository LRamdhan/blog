import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className='bg-slate-500 py-4 text-white flex justify-center gap-10'>
      <Link href={"/login"}>Login</Link>
      <Link href={"/"}>Home</Link>
      <Link href={"/search"}>Search</Link>
    </nav>
  )
}

export default Navbar