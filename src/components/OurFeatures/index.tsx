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
            <div className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md">
              <Image
                className="relative"
                src={"/img/share.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <h5 className="mx-4">{t("OurFeatures.createMore")}</h5>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <div className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md">
              <Image
                className="relative"
                src={"/img/calendar-edit.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <h5 className="mx-4">{t("OurFeatures.createMore")}</h5>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <div className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md">
              <Image
                className="relative"
                src={"/img/ticket-2.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <h5 className="mx-4">{t("OurFeatures.createMore")}</h5>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <div className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md">
              <Image
                className="relative"
                src={"/img/ticket-star.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <h5 className="mx-4">{t("OurFeatures.createMore")}</h5>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <div className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md">
              <Image
                className="relative"
                src={"/img/building-4.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <h5 className="mx-4">{t("OurFeatures.createMore")}</h5>
          </div>
          <div className="flex items-center w-[25%] md:w-full my-6">
            <div className="flex items-center justify-center bg-[#F4ECF8] w-[50px] h-[50px] rounded-md">
              <Image
                className="relative"
                src={"/img/graph.png"}
                alt="Next.js Logo"
                width={30}
                height={30}
                priority
              />
            </div>
            <h5 className="mx-4">{t("OurFeatures.createMore")}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
