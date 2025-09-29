import Image from 'next/image'

const UserButton = ({url}: {url: string}) => {  
  return (
    <Image
      src={url}
      alt="User"
      width={50}
      height={50}
      className="w-8 h-8 rounded-full"
    />  
  )
}

export default UserButton