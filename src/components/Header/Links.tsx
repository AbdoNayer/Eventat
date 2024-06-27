import { useMessages, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Links = () => {
  // const t = useTranslations();
  const t = useMessages();
  const selectActive = () => {
    console.log("selectActive");
  };

  return (
    <>
      {/* <motion.h1
        className={`text-white mx-5`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        home
      </motion.h1> */}
      <ul className="flex items-center md:flex-col">
        <li
          className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3 border-r-[0.5px] border-b-[0.5px] rounded-[5px]`}
        >
          <a href="#Home">{t("Header.home")}</a>
        </li>
        <li className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3`}>
          <a href="#About">{t("Header.about")}</a>
        </li>
        <li className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3`}>
          <a href="#successPartners">{t("Header.successPartners")}</a>
        </li>
        <li className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3`}>
          <a href="#ourCustomers">{t("Header.ourCustomers")}</a>
        </li>
        <li className={`text-white mx-3 md:my-4 cursor-pointer py-2 px-3`}>
          <a href="#Contact">{t("Header.contact")}</a>
        </li>
      </ul>
    </>
  );
};

export default Links;
