"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Index = () => {
  const t = useTranslations();
  return (
    <div
      id="Home"
      className="bg-[url('/img/bg.png')] bg-no-repeat h-screen bg-cover flex items-center justify-center md:h-auto md:py-[30px] md:pt-[140px]"
    >
      <div className="container">
        <div className="text-center 2lg:max-w-[900px] m-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-bold text-[30px]"
          >
            معنا، كل فعالية تصبح قصة تُروى بعناية وإبداع، لتبقى ذكرياتها خالدة
            في الأذهان
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-white my-8 2lg:max-w-[690px] m-auto leading-[30px]"
          >
            مرحباً بكم في عالم الفعاليات المبهرة! نحن هنا لنحول كل مناسبة إلى
            تجربة فريدة لا تُنسى، من خلال تنظيم فعاليات بأعلى مستويات الاحترافية
            والإبداع. دعونا نجعل من مناسبتكم القادمة حكاية تُروى بأجمل التفاصيل.
          </motion.p>
          <div className="flex items-center justify-center pt-4">
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .9 }}
              whileHover={{
                scale: 0.9,
                transition: { duration: .9 },
              }}
              whileTap={{ scale: 0.9 }}            
              className="bg-[#6432E3] text-white rounded-[5px] h-[48px] w-[250px] mx-2"
            >
              {t("InfoContent.btnOrderNow")}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .9 }}
              whileHover={{
                scale: 0.9,
                transition: { duration: .9 },
              }}
              whileTap={{ scale: 0.9 }}
              className="border text-white rounded-[5px] h-[48px] w-[250px] mx-2"
            >
              {t("InfoContent.SystemExperience")}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
