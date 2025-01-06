"use client";
import {
  FaBars,
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
  FaMousePointer,
  FaWhatsapp,
} from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { ReactNode, useState } from "react";
import Intro from "@/components/shared/Intro";
import Nav from "@/components/shared/Nav/Nav";
import Providers from "./providers";
import "./styles/globals.css";

type LayoutProps = {
  children: ReactNode;
};

const socialIcons = [
  { icon: <FaFacebook className="text-4xl" />, link: "https://www.facebook.com/iMohy2/", id: 1 },
  { icon: <FaFacebookMessenger className="text-4xl" />, link: "https://m.me/iMohy2/", id: 2 },
  { icon: <FaGithub className="text-4xl" />, link: "github.com/imohy", id: 3 },
  { icon: <FaLinkedin className="text-4xl" />, link: "https://www.linkedin.com/in/imohy/", id: 4 },
  { icon: <FaWhatsapp className="text-4xl" />, link: "https://wa.me/201553552663", id: 5 },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const handleIntroClose = () => {
    setIntro(!intro);
  };

  return (
    <html lang="en">
      <head>
        <title>IMohy | Portfolio</title>
        <meta name="title" content="IMohy" />
        <meta
          name="description"
          content="IMohy - Professional developer offering services in web development, React, Next.js, and more."
        />
        <link rel="icon" href="/images/mohy.jpeg" sizes="any" />
        <link rel="icon" href="/images/mohy.jpeg" type="image/png" sizes="32x32" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imohy-portfolio-final.vercel.app/" />
        <meta property="og:title" content="IMohy | Developer" />
        <meta
          property="og:description"
          content="IMohy - Professional developer offering services in web development, React, Next.js, and more."
        />
        <meta property="og:image" content="/images/mohy.jpeg" />
        <meta property="twitter:card" content="/images/mohy.jpeg" />
        <meta property="twitter:url" content="https://imohy-portfolio-final.vercel.app/" />
        <meta property="twitter:title" content="IMohy | Developer" />
        <meta
          property="twitter:description"
          content="IMohy - Professional developer offering services in web development, React, Next.js, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IMohy | Portfolio" />
        <meta property="twitter:image" content="/images/mohy.jpeg" />
        <meta name="theme-color" content="#1fdf64" />
        <link rel="apple-touch-icon" href="/images/mohy.jpeg" />
        <link rel="shortcut icon" href="/images/mohy.jpeg" />
      </head>
      <body>
        <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
          <div className="lg:hidden">
            <div className=" bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative">
              <div className="icon flex items-center gap-x-2" onClick={handleIntroClose}>
                <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
                  <SlOptionsVertical />
                </span>
                <div className="text-Snow absolute -right-1 -bottom-1">
                  <FaMousePointer />
                </div>
              </div>
              <div className="icon flex items-center gap-x-2" onClick={handleClose}>
                <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
                  {" "}
                  <FaBars />
                </span>
              </div>
            </div>
          </div>
          <div className="flex relative h-full justify-between gap-x-3">
            <div
              className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col  lg:relative ${
                intro ? "flex absolute" : "hidden"
              }`}
            >
              <Intro />
            </div>
            {intro && (
              <div
                onClick={handleIntroClose}
                className="fixed top-0 left-0  w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
              />
            )}

            <div className="w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar">
              <Providers>{children}</Providers>
            </div>
            <div
              className={`hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`}
            >
              <div
                onClick={handleClose}
                className="bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl "
              >
                <span className="icon border-2 border-Green p-2 rounded-xl">
                  {" "}
                  <FaBars />
                </span>
              </div>
              <div className="text-white flex flex-col items-center justify-center h-full gap-6">
                {socialIcons.map((item) => {
                  return (
                    <a href={item.link} rel="noreferrer" target="_blank" key={item.id}>
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
            {<Nav isOpen={isOpen} onClose={handleClose} />}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
