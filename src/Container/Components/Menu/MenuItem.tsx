import Button from '@mui/material/Button'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

interface Props {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <>
            <Button>
                <NavLink
                    to={to}
                    className={({ isActive }) =>
                        isActive ? 'menu-item-active' : 'menu-item'
                    }
                >
                    {children}
                </NavLink>
            </Button>
        </>
    )
}
export default MenuItem
