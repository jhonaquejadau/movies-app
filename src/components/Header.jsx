import React from "react";
import {Link} from "react-router-dom"

export default function Header () {
    return (
        <header className="fixed z-10 top-0 left-0 w-[100%] text-slate-300 py-2 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]">
            <div className="flex flex-row items-center w-[90%] h-full mx-auto">
                <div className="flex flex-row mr-auto">
                    <Link to="/">
                        <p className="text-[2rem] text-orange-300 font-bold mx-2">MovieApp</p>
                    </Link>
                    
                    <ul className="flex flex-row items-center">
                        <Link to="/movies">
                            <li className="text-[1.2rem] font-bold mx-2">Movies</li>
                        </Link>
                        <Link to="/tv-shows">
                            <li className="text-[1.2rem] font-bold mx-2">TV Shows</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <p className="capitalize text-slate-400 font-bold mx-4 hover:text-rose-500">login</p>
                    <p className="capitalize text-slate-400 font-bold mx-4 hover:text-rose-500">TMDB</p>
                </div>
            </div>

        </header>
    )
}