"use client";
import { motion } from "framer-motion";
import { SliderOptional } from "..";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type Props = {
  lang: any;
};

const Index = ({ lang }: Props) => {
  console.log('lang', lang)
  const t = useTranslations();
  const imagesLogos = [
    {
      id: 1,
      image: "/img/11.png",
      title: "إسم العميل",
      disc: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي",
    },
    {
      id: 1,
      image: "/img/22.png",
      title: "إسم العميل",
      disc: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي",
    },
    {
      id: 1,
      image: "/img/33.png",
      title: "إسم العميل",
      disc: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي",
    },
    {
      id: 1,
      image: "/img/01.jpg",
      title: "إسم العميل",
      disc: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي",
    },
  ];
  return (
    <div id="ourCustomers" className="pt-[45px] pb-[10px]">
      <div className="container">
        <div
          className={`relative before:lg:hidden before:absolute before:top-[33px] ${
            lang === "ar"
              ? "before:bg-gradient-to-r before:left-[110px]"
              : "before:bg-gradient-to-l before:right-[110px]"
          } before:from-[#C168F4] before:w-[70%] before:h-[2px]`}
        >
          <h4 className="text-[24px] font-bold">{t("Header.ourCustomers")}</h4>
          <p className="text-[#6432E3] mt-2 font-bold">
            {t("OurCustomers.info")}
          </p>
        </div>
        <SliderOptional
          slides={imagesLogos.map((item: any, index: number) => (
            <div key={index} className="px-2 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: index == 2 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-full h-[350px] border rounded-[10px] overflow-hidden">
                  <Image
                    className="relative w-full h-full"
                    src={item.image}
                    alt="Next.js Logo"
                    width={110}
                    height={250}
                    priority
                  />
                </div>
                <div className="text-center py-3">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-[#727272] my-3">{item.disc}</p>
                  <a
                    href=""
                    className="bg-[#6432E3] m-auto text-white rounded-[5px] h-[48px] w-[180px] flex items-center justify-center"
                  >
                    <span className="text-[13px]">
                      {t("OurCustomers.link")}
                    </span>
                    {
                      lang === "ar" ?
                      <FaArrowLeftLong className="mx-2" />
                      :
                      <FaArrowRightLong className="mx-2" />
                    }
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
          sentData={{
            spaceBetween: 10,
            slidesPerView: 3,
            lang: lang,
            breakpoints: {
              window320: "1",
              window768: "2",
              window1024: "3",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Index;
