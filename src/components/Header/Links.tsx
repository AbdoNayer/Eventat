import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

const Links = () => {
  const t = useTranslations();
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
      <ul className="flex items-center">
        <li className={`text-white mx-3 cursor-pointer py-2 px-3 border-r-[0.5px] border-b-[0.5px] rounded-[5px]`}>{t("Header.home")}</li>
        <li className={`text-white mx-3 cursor-pointer py-2 px-3`}>{t("Header.about")}</li>
        <li className={`text-white mx-3 cursor-pointer py-2 px-3`}>{t("Header.successPartners")}</li>
        <li className={`text-white mx-3 cursor-pointer py-2 px-3`}>{t("Header.ourCustomers")}</li>
        <li className={`text-white mx-3 cursor-pointer py-2 px-3`}>{t("Header.contact")}</li>
      </ul>
    </>
  );
}

export default Links;
