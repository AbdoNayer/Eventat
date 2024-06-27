import { ContactUs, InfoAbout, InfoHead, OurCustomers, OurFeatures, SuccessPartners } from "@/components";
import { useTranslations } from "next-intl";

type Props = {
  locale: any;
};

const Home = ({ locale }: Props) => {
  const t = useTranslations("");
  console.log('locale', locale)
  console.log('t', t)
  return (
    <div className="">
      <InfoHead />
      <SuccessPartners />
      <InfoAbout />
      <OurFeatures />
      <OurCustomers />
      <ContactUs />
    </div>
  );
};

export default Home;
