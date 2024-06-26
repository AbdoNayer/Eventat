import { SliderOptional } from "..";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";


const Index = () => {
  const t = useTranslations();
  const imagesLogos = [
    {
      id: 1,
      image: "/img/01.jpg",
      title: "إسم العميل",
      disc: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي",
    },
    {
      id: 1,
      image: "/img/01.jpg",
      title: "إسم العميل",
      disc: "هذا النص مثال علي الكلام المكتوب في هذه المنطقة ولا يمثل اي محتوي حقيقي",
    },
    {
      id: 1,
      image: "/img/01.jpg",
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
    <div className="pt-[45px] pb-[10px]">
      <div className="container">
        <div className="relative before:lg:hidden before:absolute before:top-[33px] before:left-[110px] before:bg-gradient-to-r before:from-[#C168F4] before:w-[70%] before:h-[2px]">
          <h4 className="text-[24px] font-bold">
            {t("Header.ourCustomers")}
          </h4>
          <p className="text-[#6432E3] mt-2 font-bold">
            {t("OurCustomers.info")}
          </p>
        </div>
        <SliderOptional
          slides={imagesLogos.map((item: any, index: number) => (
            <div
              key={index}
              className=""
            >
              <div className="w-full h-[200px]">
                <Image
                  className="relative w-full h-full"
                  src={item.image}
                  alt="Next.js Logo"
                  width={110}
                  height={200}
                  priority
                />
              </div>
              <div className="">
                <h4>{item.title}</h4>
                <p>{item.disc}</p>
                <a
                  href=""
                  className="bg-[#6432E3] text-white rounded-[5px] h-[48px] w-[250px] flex items-center justify-center"
                >
                  <span>{t("OurCustomers.link")}</span>
                  <FaArrowLeftLong />
                </a>
              </div>
            </div>
          ))}
          sentData={{
            spaceBetween: 10,
            slidesPerView: 3,
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
