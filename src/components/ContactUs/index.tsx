/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Index = () => {
  const t = useTranslations();
  return (
    <div id="Contact" className="">
      <div className="container">
        <div className="relative">
          <h4 className="text-[24px] font-bold">{t("Header.contact")}</h4>
          <p className="text-[#6432E3] mt-2 font-bold">{t("ContactUs.info")}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-[#C168F4CC] relative px-[40px] py-[80px] pb-[150px] md:px-[10px] md:pb-[100px] rounded-[10px] my-3 overflow-hidden">
            <img
              src="/img/shapeCon.png"
              alt=""
              className="absolute bottom-0 right-0 w-full"
            />
            <img
              src="/img/sender.png"
              alt=""
              className="absolute top-[20px] left-[20%]"
            />
            <div className="relative">
              <form>
                <div className="flex items-center flex-wrap md:flex-col">
                  <div className="w-[50%] md:w-full p-3">
                    <label className="block text-white">
                      {t("ContactUs.name")}
                    </label>
                    <input
                      type="text"
                      className="bg-white rounded-[7px] p-4 my-2 w-full"
                      placeholder={t("ContactUs.textHere")}
                    />
                  </div>
                  <div className="w-[50%] md:w-full p-3">
                    <label className="block text-white">
                      {t("ContactUs.phone")}
                    </label>
                    <input
                      type="text"
                      className="bg-white rounded-[7px] p-4 my-2 w-full"
                      placeholder={t("ContactUs.textHere")}
                    />
                  </div>
                  <div className="w-[100%] md:w-full p-3">
                    <label className="block text-white">
                      {t("ContactUs.massage")}
                    </label>
                    <textarea
                      className="bg-white rounded-[7px] p-4 my-2 w-full min-h-[200px]"
                      placeholder={t("ContactUs.textHere")}
                    ></textarea>
                  </div>
                </div>
                <button className="bg-[#6432E3] m-auto text-white rounded-[5px] h-[48px] w-[280px] flex items-center justify-center">
                  {t("ContactUs.sent")}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
