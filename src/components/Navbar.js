import React from 'react'
import logo1 from '../images/logo1.svg'

export default function Navbar() {
    return (
        <header>
            <nav>
                <div>
                    <a>
                        <img src={logo1} alt="Logo"/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Experience
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Misc.
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}