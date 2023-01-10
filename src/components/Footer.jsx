import React from "react";
import { data } from "../utils/data";

const Footer = () => {
  return (
    <footer className=" w-full flex flex-row justify-center items-center py-[2em] px-[15em] bg-[#030337] max-[1000px]:px-[2em] max-[500px]:flex-col ">
      <p className=" mr-auto max-[500px]:mr-0 max-[500px]:mb-4`} text-white">
        {`<Design/>`} by{" "}
        <span className="text-[#6cccff] font-[700]">jaqudev_ 2022</span>
      </p>
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
