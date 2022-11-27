import React from "react";

export default function Footer () {
    return (
        <div className="flex flex-row justify-around items-center bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-purple-900 py-8">
            <p className="text-xl font-bold text-slate-200">Poject Design by jaqudev_</p>
            <div className="text-white">Github</div>
            <div className="text-white">Instagram</div>
            <div className="text-white">Twitter</div>
            <div className="text-white">Gmail</div>
        </div>
    )
}