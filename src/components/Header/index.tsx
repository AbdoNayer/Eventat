"use client";
import Image from "next/image";
import SelectLang from "./SelectLang";
import Links from "./Links";
import ToggleMenu from "./ToggleMenu";
import { useEffect, useState } from "react";
import { getMessages } from "next-intl/server";

type Props = {
  lang: any;
  messages: any
};

const Index = ({ lang, messages }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className={`${isVisible && 'bg-white/55 shadow-xl header-active'} fixed top-0 right-0 w-full p-5 md:px-4 z-[9999]`}>
      <div className="container">
        <div className="flex items-center justify-center md:justify-between">
          <div className="flex-2 md:flex-none">
            <Image
              className="relative"
              src="/img/logo.png"
              alt="Next.js Logo"
              width={100}
              height={33}
              priority
            />
          </div>
          <div className="flex items-center justify-center flex-1 md:flex-none md:justify-normal">
            <ToggleMenu />
            <div
              className={`${
                lang === "ar" ? "md:right-0" : "md:left-0"
              } md:fixed md:top-0 md:bg-black md:w-[250px] md:h-full flex items-center md:flex-col`}
            >
              <Links messages={messages} />
              <SelectLang lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
