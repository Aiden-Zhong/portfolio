import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import {FaBeer} from 'react-icons/fa'

export const NavBar = () => {

    const name_page_style = "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest";
    const name_page_active_style = " text-white text-red-100 bg-red-700";
    const nav_bar_style = "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800";
    const nav_bar_active_style = " text-red-100 bg-red-700";

    return (
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to="/" exact="true"
                        className={({ isActive }) =>
                            name_page_style +
                            (isActive ? name_page_active_style : undefined)
                        }>
                        Yingjie
                    </NavLink>
                    <NavLink to="/post"
                        className={({ isActive }) =>
                            nav_bar_style +
                            (isActive ? nav_bar_active_style : undefined)
                        }
                    >
                        Blog Post
                    </NavLink>
                    <NavLink to="/project"
                        className={({ isActive }) =>
                            nav_bar_style +
                            (isActive ? nav_bar_active_style : undefined)
                        }
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        className={({ isActive }) =>
                            nav_bar_style +
                            (isActive ? nav_bar_active_style : undefined)
                        }
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaBeer/>
                    </a>
                    <SocialIcon url= "https://twitter.com/" className="mr-4" target="_blank" fgColor="blue" style={{ height: 35, width: 35 }} />
                    <SocialIcon url='https://www.youtube.com/' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />
                    <SocialIcon url='https://www.linkedin.com/' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}

export default NavBar;