import React from "react";
import { data } from "../utils/data";
import tmdblogo from "../utils/logo/tmdblogo.svg";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-evenly items-center py-[2em] bg-[#030337] sm:flex-row">
      <p className="max-[500px]:mb-4 text-white">
        {`<Design/>`} by
        <span className="text-[#6cccff] font-[700]"> jaqudev_ 2022</span>
      </p>
      <img className="w-40 my-8 sm:my-0" src={tmdblogo} alt="tmdblogo" />
      <div className="flex flex-row justify-center items-center gap-4">
        {data.social.map((social, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-center items-center gap-2 capitalize hover:scale-[1.2] z-40 mx-2"
            >
              <a href={social.source} target="_blank" rel="noreferrer">
                <img
                  className="w-[30px] h-[30px] "
                  src={social.imgWhite}
                  alt={social.name}
                />
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
