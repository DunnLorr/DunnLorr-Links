import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] dark:text-[#449cee]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">DunnLorr</h2>
                <p>Full-Stack Developer and Streamer</p>
                <p className="py-4">
                  I am available for freelance and full-time positions in web
                  development. I am also available for collaborations in
                  streaming. Contact me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.twitch.tv/dunnlorr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      title="Twitch"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-125 ease-in duration-300"
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
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
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
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaInstagram />
                    </div>
                  </a>
                  <a
                    href="https://www.tiktok.com/@dunnlorr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      title="TikTok"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaTiktok />
                    </div>
                  </a>
                </div>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.kick.com/dunnlorr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      title="Kick"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-125 ease-in duration-300"
                    >
                      <FaKickstarterK />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dunnlorr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      title="LinkedIn"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/dunnlorr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      title="Github"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/ejWSMAHz2u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      title="Join the Discord!"
                      className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-6 cursor-pointer hover:scale-125 ease-in duration-300"
                    >
                      <FaDiscord />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/112bf0f0-93ee-4c2a-a1ef-3525af5dfb7c"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="flex flex-col">
                  <label for="name" className="uppercase text-sm py-2">
                    Name
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label for="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label for="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="text"
                    name="subject"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label for="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                    rows="10"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
