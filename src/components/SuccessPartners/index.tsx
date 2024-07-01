import { SliderOptional } from "..";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  lang: any;
};

const Index = ({ lang }: Props) => {
  const t = useTranslations();
  const imagesLogos = [
    "/img/logo1.png",
    "/img/logo2.png",
    "/img/logo3.png",
    "/img/logo4.png",
    "/img/logo1.png",
    "/img/logo2.png",
    "/img/logo3.png",
    "/img/logo4.png",
    "/img/logo1.png",
    "/img/logo2.png",
    "/img/logo3.png",
    "/img/logo4.png",
  ];
  return (
    <div id="successPartners" className="bg-[#f4ecf8] pt-[45px] pb-[10px]">
      <div className="container">
        <div className={`relative before:lg:hidden before:absolute before:top-[33px] ${lang === 'ar' ? 'before:bg-gradient-to-r before:left-[110px]' : 'before:bg-gradient-to-l before:right-[110px]'} before:from-[#C168F4] before:w-[70%] before:h-[2px]`}>
          <h4 className="text-[24px] font-bold">{t("Header.successPartners")}</h4>
          <p className="text-[#6432E3] mt-2 font-bold">{t("SuccessPartners.info")}</p>
        </div>
        <SliderOptional
          slides={imagesLogos.map((item: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale transition hover:grayscale-0"
            >
              <Image
                className="relative"
                src={item}
                alt="Next.js Logo"
                width={110}
                height={33}
                priority
              />
            </div>
          ))}
          sentData={{
            spaceBetween: 10,
            slidesPerView: 6,
            lang: lang,
            breakpoints: {
              window320: "1",
              window768: "3",
              window1024: "6",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Index;
