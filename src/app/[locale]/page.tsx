import { ContactUs, InfoAbout, InfoHead, OurCustomers, OurFeatures, SuccessPartners } from "@/components";

interface Props {
  params: {
    locale: string;
  };
}

const Home = ({ params: { locale } }: Props) => {
  console.log('locale', locale)
  return (
    <div className="">
      <InfoHead />
      <SuccessPartners lang={locale} />
      <InfoAbout />
      <OurFeatures />
      <OurCustomers lang={locale} />
      <ContactUs />
    </div>
  );
};

export default Home;
