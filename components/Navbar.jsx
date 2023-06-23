import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaKickstarterK,
  FaLinkedinIn,
  FaTiktok,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import NavLogo from "../public/assets/mask.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "bg-[#ecf0f3] dark:bg-slate-800 fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "bg-[#ecf0f3] dark:bg-slate-800 fixed w-full h-20 z-[100]"
      }
    >
      <div className="bg-[#ecf0f3] dark:bg-slate-800 flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="60"
            height="50"
            className="cursor-pointer rounded-full"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-slate-800 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={NavLogo}
                alt="Dunnlorr Mask"
                width="87"
                height="87"
                className="rounded-full"
              />
              <div
                onClick={handleNav}
                className="dark:bg-slate-700 rounded-full shadow-lg shadowgray-400 dark:shadow-sm dark:shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b hover:scale-110 ease-in duration-300"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b hover:scale-110 ease-in duration-300"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b hover:scale-110 ease-in duration-300"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:border-b hover:scale-110 ease-in duration-300"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5] dark:text-[#449cee] border-b">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.twitch.tv/dunnlorr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="Twitch"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaTwitch />
                  </div>
                </a>
                <a
                  href="https://www.twitter.com/dunnlorr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="Twitter"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaTwitter />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/dunnlorr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="Instagram"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaInstagram />
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@dunnlorr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="TikTok"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaTiktok />
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.kick.com/dunnlorr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="Kick"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaKickstarterK />
                  </div>
                </a>
                <a
                  href="https://www.github.com/dunnlorr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="Github"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    title="Contact Me"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <a
                  href="https://www.linkedin.com/in/dunnlorr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="LinkedIn"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaLinkedinIn />
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://discord.gg/ejWSMAHz2u"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    title="Join the Discord!"
                    className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-3 cursor-pointer hover:scale-125 ease-in duration-300"
                  >
                    <FaDiscord />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
