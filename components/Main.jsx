import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-slate-300">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 dark:text-slate-400">
            Hi, I&#39;m{" "}
            <span className="text-[#5651e5] dark:text-[#449cee]">
              {" "}
              DunnLorr
            </span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-slate-400">
            Streamer and Web-Developer
          </h1>
          <p className="py-4 text-gray-600 dark:text-slate-300 sm:max-w-[70%] m-auto">
            I’m focused on building an amazing community for my friends and I.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.twitch.tv/dunnlorr"
              target="_blank"
              rel="noreferrer"
            >
              <div
                title="Twitch"
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <FaTwitch />
              </div>
            </a>
            <a
              href="https://www.twitter.com/dunnlorr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <a
              href="https://www.instagram.com/dunnlorr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@dunnlorr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTiktok />
              </div>
            </a>
          </div>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://github.com/dunnlorr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <a
              href="https://www.linkedin.com/in/dunnlorr/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
