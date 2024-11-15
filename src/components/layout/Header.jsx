'use client';
import React, { children } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItemsData = [
    { href: '/about', label: 'about' },
    { href: '/state', label: 'state' },
    { href: '/login', label: 'login' },
];

const NavLink = ({ children, href }) => {
    const pathname = usePathname(); //현재 경로를 가져온다.
    return (
        <Link href={href} className={`py-2 ${pathname === href ? 'text-primary' : ''}`}>
            {children}
        </Link>
    );
};
/*
navItemsData.map({item, index}) => {
    <li>
    <NavLink href= {href}>{item.label}</NavLink>
</li>
} 
*/

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <h1>
                <Link href="/">logo</Link>
            </h1>
            <ul className="flex gap-5 text-secondary">
                <li>
                    <NavLink href="/about">about</NavLink>
                </li>
                <li>
                    <NavLink href="/state">state</NavLink>
                </li>
                <li>
                    <NavLink href="/login">login</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;
