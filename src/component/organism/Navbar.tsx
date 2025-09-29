import Link from 'next/link'
import LogoutButton from '../atom/LogoutButton'
import UserButton from '../atom/UserButton';
import { getSession } from '@/utils/session';
import { SessionValue } from '@/utils/typeUtils';

const Navbar = async () => {
  const session: SessionValue = await getSession();  

  return (
    <nav className='bg-primary py-4 text-white flex justify-center items-center gap-10 px-3'>
      <div className="w-[940px] flex justify-between items-center">
        <div className="flex items-center gap-x-10">
          <Link href={"/login"}>
            <h3 className='text-lg font-semibold text-bg'>Blog</h3>
          </Link>
          <input className="w-[400px] border-[1px] border-blur-bg px-5 py-1 rounded-md max-w-[400px] placeholder:text-blur-bg text-bg outline-none" type="text" placeholder="Cari blog..." />
        </div>
        {!session && (<>
          <Link href={"/login"}>
            <button className="bg-bg text-text px-5 py-1 rounded-md font-semibold">Login</button>
          </Link>
        </>)}

        {session && (<>
          <div className="flex items-center gap-x-5">
            <LogoutButton />
            <UserButton url={session.user?.image || ""} />
          </div>
        </>)}
      </div>
    </nav>
  )
}

export default Navbar