import React from 'react'
import MenuNavLink from './menu-nav-link'

const Menu = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <MenuNavLink href="/">Home</MenuNavLink>
      </li>
      <li>
        <MenuNavLink href="/blog">Blog</MenuNavLink>
      </li>
      <li>
        <MenuNavLink href="/about">About</MenuNavLink>
      </li>
      <li>
        <MenuNavLink href="/contacts">Contacts</MenuNavLink>
      </li>
    </ul>
  )
}

export default Menu