import Link from "next/link"
import Image from "next/image"
import Log from '../image/logo.png'
// import clsx from "clsx"

const Logo = () => {
  return (
  <Link href={"/"}>
<Image
width={175}
height={20}
src={Log} 
alt=""
className="bg-opacity-0 "/>



  </Link>
  )
}

export default Logo