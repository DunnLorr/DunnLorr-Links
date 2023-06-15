import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] dark:text-[#449cee]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-slate-300">
            Hello, I'm DunnLorr, a passionate web developer with a knack for
            transforming ideas into dynamic and functional online experiences.
            With 5 of experience in the field, I have honed my skills in
            crafting visually appealing, user-friendly websites that effectively
            communicate the desired message.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-300">
            Ultimately, my goal is to create exceptional online experiences both
            through my web development projects and my Twitch streams. I strive
            to build websites that not only showcase my clients' brands but also
            engage and captivate their target audiences. Simultaneously, I aim
            to provide an entertaining and interactive streaming experience,
            fostering a positive and inclusive community of tech enthusiasts and
            gamers.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
