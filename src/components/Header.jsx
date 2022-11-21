import React from "react";

export default function Header () {
    return (
        <div className="flex flex-row items-center w-[100%] h-[100%] px-2 py-4 shadow-xl">
            <div className="flex flex-row justify-center items-center mr-auto ml-[10em]">
                <p className="text-3xl text-slate-400 font-bold mx-2">MovieApp</p>
                <ul className="flex flex-row justify-center items-center">
                    <li className="text-xl font-bold bg-slate-200 rounded-xl px-4 py-1 mx-2">Movies</li>
                    <li className="text-xl font-bold bg-slate-200 rounded-xl px-4 py-1 mx-2">TV Shows</li>
                    <li className="text-xl font-bold bg-slate-200 rounded-xl px-4 py-1 mx-2">People</li>
                </ul>
            </div>
            <div className="flex flex-row justify-center items-center mr-[10em]">
                <p className="capitalize text-xl text-slate-400 font-bold mx-4 hover:text-rose-500">login</p>
                <p className="capitalize text-xl text-slate-400 font-bold mx-4 hover:text-rose-500">TMDB</p>
            </div>
        </div>
    )
}