import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar  bg-gray-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Her Power</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal flex items-center px-1">
                    <li className=''><Link href="/services">Services</Link> </li>
                    <li><Link href="/work">Work</Link> </li>
                    <li><Link href="/skills">Skills</Link> </li>
                    <li><Link href="/testimonials">Testimonials</Link> </li>
                    <li><Link href="/Contacts">Contacts</Link> </li>
                    <li><button className="btn btn-outline btn-accent">Hire Me</button></li>
                </ul>
            </div>
        </div>
    )
}
