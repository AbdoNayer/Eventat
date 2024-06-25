/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type Props = {
  lang: any;
};

const SelectLang = ({ lang }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const changeLang = (val: any) => {
    const nextLocale = val;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <button
      onClick={() => changeLang(lang === "ar" ? "en" : "ar")}
      className="w-[40px] h-[40px] flex items-center justify-center border rounded-sm text-white mx-3"
    >
      {lang === "ar" ? "EN" : "AR"}
    </button>
  );
};

export default SelectLang;
