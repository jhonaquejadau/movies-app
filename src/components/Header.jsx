import React, {useState} from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"

import {AiOutlineMenu, AiOutlineClose, AiOutlineLogin} from "react-icons/ai"

export default function Header () {

    const [changeNabvar, setChangeNavbar] = useState(false)
    const [showNav, setShowNav] = useState(false)

    const handleBackground = () => {
        return (window.scrollY > 400) ? setChangeNavbar(true) : setChangeNavbar(false) 
    }

    const handleShowNav = () => {
        setShowNav(prev => !prev)
    }

    const handleHiddeNav = () => {
        setShowNav(false)
    }

    useEffect(() => {
        handleBackground()
        window.addEventListener("scroll", handleBackground)
    }, [])

    return (
        <header className={`${changeNabvar ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]'} fixed z-10 top-0 left-0 w-[100%] text-slate-300 text-[1.2rem] py-2 `}>
            <div className="flex flex-row items-center w-[90%] h-full mx-auto">
                <div onClick={() => handleShowNav()} className="hidden max-[750px]:block absolute z-10">
                    {!showNav ? <AiOutlineMenu /> : <AiOutlineClose/>}
                </div>
                <ul className={`${showNav ? 'block inset-0 bg-orange-500 absolute' : 'hidden'} flex flex-row justify-evenly items-center min-[750px]:flex`}>
                    <Link to="/movies">
                        <li onClick={() => handleHiddeNav()} className=" font-bold mx-2">Movies</li>
                    </Link>
                    <Link to="/tv-shows">
                        <li onClick={() => handleHiddeNav()} className="font-bold mx-2">TV Shows</li>
                    </Link>
                </ul>
                <div className="mx-auto">
                    <Link to="/">
                        <p className="text-[2rem] text-orange-500 font-bold mx-auto max-[750px]:text-[1.5rem]"><span className="hover:text-slate-100">MOVIE</span>  <span className="text-slate-400 hover:text-orange-300">BLOG</span></p>
                    </Link>
                </div>
                <div className="flex flex-row justify-center items-center max-[750px]:hidden">
                    <p className="capitalize font-bold mx-4 hover:text-rose-500">login</p>
                    <p className="capitalize font-bold mx-4 hover:text-rose-500">TMDB</p>
                </div>
                <div className="hidden max-[750px]:block text-2xl">
                    <AiOutlineLogin />
                </div>

            </div>

        </header>
    )
}