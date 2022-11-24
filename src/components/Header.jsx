import React from "react";
import {Link} from "react-router-dom"

export default function Header () {
    return (
        <div className="flex flex-row items-center w-[100%] h-[100%] px-2 py-4 shadow-xl bg-white">
            <div className="flex flex-row justify-center items-center mr-auto ml-[10em]">
                <Link to="/">
                    <p className="text-3xl text-slate-400 font-bold mx-2">MovieApp</p>
                </Link>
                
                <ul className="flex flex-row justify-center items-center">
                    <Link to="/movies">
                        <li className="text-xl font-bold bg-slate-200 rounded-xl px-4 py-1 mx-2">Movies</li>
                    </Link>
                    <Link to="/tv-shows">
                        <li className="text-xl font-bold bg-slate-200 rounded-xl px-4 py-1 mx-2">TV Shows</li>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-row justify-center items-center mr-[10em]">
                <p className="capitalize text-xl text-slate-400 font-bold mx-4 hover:text-rose-500">login</p>
                <p className="capitalize text-xl text-slate-400 font-bold mx-4 hover:text-rose-500">TMDB</p>
            </div>
        </div>
    )
}