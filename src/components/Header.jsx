import React, {useState} from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"

export default function Header () {

    const [changeNabvar, setChangeNavbar] = useState(false)
    const handleBackground = () => {
        return (window.scrollY > 50) ? setChangeNavbar(true) : setChangeNavbar(false) 
    }

    useEffect(() => {
        handleBackground()
        window.addEventListener("scroll", handleBackground)
    }, [])

    return (
        <header className={`${changeNabvar ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]'} fixed z-10 top-0 left-0 w-[100%] text-slate-300 text-[1.2rem] py-2 `}>
            <div className="flex flex-row items-center w-[90%] h-full mx-auto">
                <ul className="flex flex-row justify-evenly items-center">
                    <Link to="/movies">
                        <li className=" font-bold mx-2">Movies</li>
                    </Link>
                    <Link to="/tv-shows">
                        <li className="font-bold mx-2">TV Shows</li>
                    </Link>
                </ul>
                <div className="mx-auto">
                    <Link to="/">
                        <p className="text-[2rem] text-orange-500 font-bold mx-2"><span className="hover:text-slate-100">MOVIE</span>  <span className="text-slate-400 hover:text-orange-300">BLOG</span></p>
                    </Link>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <p className="capitalize font-bold mx-4 hover:text-rose-500">login</p>
                    <p className="capitalize font-bold mx-4 hover:text-rose-500">TMDB</p>
                </div>
            </div>

        </header>
    )
}