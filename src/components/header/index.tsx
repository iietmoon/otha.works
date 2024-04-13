import React, {useState, useEffect} from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const {pathname, query} = useRouter()
  const [menuIsShown, setMenuIsShown] = useState(false);

  useEffect(()=>{
    setMenuIsShown(false);
  }, [pathname, query])


  return (
    <div className="container">
      <div className={menuIsShown ? "menu-opened" : "menu-closed"}>
      <header className="header">
        <Link className="brand smooth" href="/">
          <Image className="default" alt="Othmane N. logo image" src="/logo.png" width={1000} height={551} />
          <Image className="white" alt="Othmane N. logo image" src="/logo-w.png" width={1000} height={551} />
        </Link>
        <ul className="menu main">
          <li className="menu-item has-dropdown">
            <Link className="menu-link smooth" href="/">Home</Link>
          </li>
          <li className="menu-item has-dropdown">
            <Link className="menu-link smooth" href="/about">About me</Link>
          </li>
          <li className="menu-item has-dropdown">
            <Link className="menu-link smooth" href="/portfolio">Portfolio</Link>
          </li>
          <li className="menu-item has-dropdown">
            <Link className="menu-link smooth" href="/explained">Explained 🔥</Link>
          </li>
          <li className="menu-item has-dropdown">
            <Link className="menu-link smooth" href="/blog">Blog</Link>
          </li>
          <li className="menu-item has-dropdown">
            <Link className="menu-link smooth" href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="menu about">
          <p>My goal is to make the digital world more beautiful. I believe that true craftmanship stands out with passion.</p>
        </div>
        <ul className="menu social hidden">
          <li className="menu-item"><Link className="menu-link anchor-link" href="https://www.linkedin.com/in/iietmoon/" target="_blank">LinkedIn</Link></li>
          <li className="menu-item"><Link className="menu-link anchor-link" href="https://github.com/iietmoon" target="_blank">Github</Link></li>
          <li className="menu-item"><Link className="menu-link anchor-link" href="https://www.behance.net/othmane-nejdi/projects" target="_blank">Behance</Link></li>
        </ul>
      </header>
      <div className="burger" onClick={()=> setMenuIsShown(!menuIsShown)}>
        <hr />
        <hr />
        <hr />
      </div>
    </div>
    </div>
  )
}