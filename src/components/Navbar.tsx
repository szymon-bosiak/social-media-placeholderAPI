import React, { ReactNode } from 'react'
import './Navbar.scss';
import { CgProfile } from 'react-icons/cg'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  return (
      <div className='navigation_container'>

        <div className='navigation_container-space'/>

        <nav className='navigation_container-nav'>
          <ul>
              <CustomLink to={'/users'} >Users</CustomLink>
              <CustomLink to={'/posts'} >Posts</CustomLink>
              <CustomLink to={'/photos'} >Photos</CustomLink>
          </ul>
        </nav>

        <div className='navigation_container-profile'>
          <CustomLink to={'/profile'}><CgProfile/></CustomLink>
        </div>
      </div>
  )
}

function CustomLink({ to, children, ...props }: {to:string, children: string|ReactNode}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar