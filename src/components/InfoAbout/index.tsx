"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Index = () => {
  const t = useTranslations();
  return (
    <div id="About" className="py-[80px]">
      <div className="container">
        <div className="flex items-center md:flex-col">
          <motion.div
            className="w-[30%] md:w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-[290px] h-[290px] md:m-auto md:mb-[55px] my-5 relative before:rounded-[7px] before:bg-[#EFEFEF] before:absolute before:w-full before:h-full before:top-0 before:right-0 before:rotate-[13deg]">
              <Image
                className="relative w-full h-full rounded-[7px]"
                src={"/img/image.png"}
                alt="Next.js Logo"
                width={110}
                height={200}
                priority
              />
            </div>
          </motion.div>
          <motion.div
            className="w-[70%] md:w-full px-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="">
              <h4 className="text-[26px] font-bold">{t("About.title")}</h4>
              <h4 className="text-[#6432E3] my-3 font-bold">
                {t("About.info")}
              </h4>
              <p className="text-[#727272] max-w-[90%] leading-[30px] md:max-w-[100%]">
                نحن شركة متخصصة في تنظيم الفعاليات، نعمل بشغف وإبداع لنحول
                رؤيتكم إلى واقع. فريقنا المتميز يعتني بأدق التفاصيل لضمان تقديم
                تجارب فريدة ومميزة، سواء كانت حفلات زفاف، مؤتمرات، معارض، أو أي
                مناسبة أخرى. نهدف
              </p>
            </div>
            <div className="flex items-center mt-[50px]">
              <button className="bg-[#6432E3] text-white rounded-[5px] h-[48px] w-[200px]">
                {t("InfoContent.btnOrderNow")}
              </button>
              <button className="border border-[#C168F4] text-[#C168F4] rounded-[5px] h-[48px] w-[200px] mx-4">
                {t("InfoContent.SystemExperience")}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
