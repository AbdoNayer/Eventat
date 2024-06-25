import Image from "next/image";
import SelectLang from "./SelectLang";
import Links from "./Links";

type Props = {
  lang: any;
};

const Index = ({ lang }: Props) => {

  return (
    <header className="fixed top-0 right-0 w-full p-5">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="flex-2">
            <Image
              className="relative"
              src="/img/logo.png"
              alt="Next.js Logo"
              width={100}
              height={33}
              priority
            />
          </div>
          <div className="flex items-center justify-center flex-1">
            <Links />
            <SelectLang lang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
