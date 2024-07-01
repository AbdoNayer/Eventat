"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Index = () => {
  const t = useTranslations();
  return (
    <div className="">
      <div className="container">
        <div className="relative">
          <h4 className="text-[24px] font-bold">{t("OurFeatures.title")}</h4>
          <p className="text-[#6432E3] mt-2 font-bold">
            {t("OurFeatures.info")}
          </p>
        </div>
        <div className="flex items-center flex-wrap md:flex-col mt-3">
          <div className="flex items-center w-[25%] md:w-full my-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md"
            >
              <Image
                className="relative"
                src={"/img/share.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </motion.div>
            <div className="overflow-hidden mx-4">
              <motion.h5
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {t("OurFeatures.createMore")}
              </motion.h5>
            </div>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md"
            >
              <Image
                className="relative"
                src={"/img/calendar-edit.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </motion.div>
            <div className="overflow-hidden mx-4">
              <motion.h5
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {t("OurFeatures.createMore")}
              </motion.h5>
            </div>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md"
            >
              <Image
                className="relative"
                src={"/img/ticket-2.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </motion.div>
            <div className="overflow-hidden mx-4">
              <motion.h5
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {t("OurFeatures.createMore")}
              </motion.h5>
            </div>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md"
            >
              <Image
                className="relative"
                src={"/img/ticket-star.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </motion.div>
            <div className="overflow-hidden mx-4">
              <motion.h5
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {t("OurFeatures.createMore")}
              </motion.h5>
            </div>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md"
            >
              <Image
                className="relative"
                src={"/img/building-4.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </motion.div>
            <div className="overflow-hidden mx-4">
              <motion.h5
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {t("OurFeatures.createMore")}
              </motion.h5>
            </div>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md"
            >
              <Image
                className="relative"
                src={"/img/graph.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </motion.div>
            <div className="overflow-hidden mx-4">
              <motion.h5
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {t("OurFeatures.createMore")}
              </motion.h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
