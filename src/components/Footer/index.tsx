import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MdEmail, MdCall } from "react-icons/md";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaSnapchat, FaXTwitter } from "react-icons/fa6";

type Props = {
  lang: any;
};

const Index = ({ lang }: Props) => {
  const t = useTranslations();
  return (
    <footer className="pt-[50px]">
      <div className="container">
        <div className="flex justify-between flex-wrap md:flex-col">
          <div className="w-[33.3%] md:w-full">
            <Image
              className="relative"
              src="/img/logo.png"
              alt="Next.js Logo"
              width={100}
              height={33}
              priority
            />
            <p className="text-[#727272] my-4 max-w-[260px]">
              نحن شركة متخصصة في تنظيم الفعاليات، نعمل بشغف وإبداع لنحول رؤيتكم
              إلى واقع.
            </p>
          </div>
          <div className="w-[33.3%] md:w-full flex flex-col items-center md:items-start">
            <div className="">
              <h1 className="text-[#64748B]">عنوان</h1>
              <ul className="py-2">
                <li>
                  <a href="" className="my-2 block">
                    عنوان فرعي
                  </a>
                </li>
                <li>
                  <a href="" className="my-2 block">
                    عنوان فرعي
                  </a>
                </li>
                <li>
                  <a href="" className="my-2 block">
                    عنوان فرعي
                  </a>
                </li>
                <li>
                  <a href="" className="my-2 block">
                    عنوان فرعي
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[33.3%] md:w-full flex flex-col items-end md:items-start">
            <div className="">
              <h1 className="text-[#64748B]">{t("Header.contact")}</h1>
              <ul className="py-3">
                <li>
                  <a href="" className="flex items-center my-2">
                    <MdEmail />
                    <span className="mr-2">event@example.com</span>
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center my-2">
                    <MdCall />
                    <span className="mr-2">+9660000000000</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-5 flex items-center justify-between md:flex-col">
            <div className="flex items-center">
              <a href="" className="w-[33px] h-[33px] me-3 flex items-center justify-center bg-[#64748B] rounded-[5px]">
                <FaTiktok color="#fff" />
              </a>
              <a href="" className="w-[33px] h-[33px] me-3 flex items-center justify-center bg-[#64748B] rounded-[5px]">
                <FaInstagram color="#fff" />
              </a>
              <a href="" className="w-[33px] h-[33px] me-3 flex items-center justify-center bg-[#64748B] rounded-[5px]">
                <FaSnapchat color="#fff" />
              </a>
              <a href="" className="w-[33px] h-[33px] me-3 flex items-center justify-center bg-[#64748B] rounded-[5px]">
                <FaXTwitter color="#fff" />
              </a>
            </div>
            <p>@2024 eventat.tech</p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
