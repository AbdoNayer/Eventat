"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  messages: any;
};

const Links = ({ messages }: Props) => {
  const [active , setActive] = useState('home');
  const selectActive = (val:any) => {
    setActive(val)
  };

  return (
    <>
      <ul className="flex items-center md:flex-col">
        <li onClick={()=> selectActive('home')} >
          <a href="#Home" className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3 ${active === 'home' && 'border-r-[0.5px] border-b-[0.5px] rounded-[5px]'}`}>{messages.Header.home}</a>
        </li>
        <li onClick={()=> selectActive('about')}>
          <a href="#About" className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3 ${active === 'about' && 'border-r-[0.5px] border-b-[0.5px] rounded-[5px]'}`}>{messages.Header.about}</a>
        </li>
        <li onClick={()=> selectActive('successPartners')}>
          <a href="#successPartners" className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3 ${active === 'successPartners' && 'border-r-[0.5px] border-b-[0.5px] rounded-[5px]'}`}>{messages.Header.successPartners}</a>
        </li>
        <li onClick={()=> selectActive('ourCustomers')}>
          <a href="#ourCustomers" className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3 ${active === 'ourCustomers' && 'border-r-[0.5px] border-b-[0.5px] rounded-[5px]'}`}>{messages.Header.ourCustomers}</a>
        </li>
        <li onClick={()=> selectActive('contact')}>
          <a href="#Contact" className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3 ${active === 'contact' && 'border-r-[0.5px] border-b-[0.5px] rounded-[5px]'}`}>{messages.Header.contact}</a>
        </li>
      </ul>
    </>
  );
};

export default Links;
