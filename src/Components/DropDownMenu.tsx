import React, { ReactNode } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from 'react-router-dom'

interface BaseMenuItem {
  label: string
}

interface NavLinkMenuItem extends BaseMenuItem {
  type: 'navlink'
  path: string
}

interface ButtonMenuItem extends BaseMenuItem {
  type: 'button'
  onClick: () => void
}

export type MenuItem = NavLinkMenuItem | ButtonMenuItem

interface DropdownMenuProps {
  children: ReactNode
  buttonLabel: string
  menuItems: MenuItem[]
  buttonClassName: string
  menuClassName: string
  itemClassName: string
  hideOnDesktop?: boolean
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, menuItems, buttonClassName, menuClassName, itemClassName, hideOnDesktop }) => {
  return (
    <div className={`${hideOnDesktop ? 'md:hidden' : ''} text-right`}>
      <Menu>
        <MenuButton className={buttonClassName}>
          {children}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className={menuClassName}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              {item.type === 'navlink' ? (
                <NavLink to={item.path} className={itemClassName}>
                  {item.label}
                </NavLink>
              ) : (
                <button onClick={item.onClick} className={itemClassName}>
                  {item.label}
                </button>
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  )
}

export default DropdownMenu
