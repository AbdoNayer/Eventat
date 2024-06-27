import { useTranslations } from "next-intl";

const Index = () => {
  const t = useTranslations();
  return (
    <div id="Home" className="bg-[url('/img/bg.png')] bg-no-repeat h-screen bg-cover flex items-center justify-center md:h-auto md:py-[30px] md:pt-[140px]">
      <div className="container">
        <div className="text-center 2lg:max-w-[900px] m-auto">
          <h1 className="text-white font-bold text-[30px]">
            معنا، كل فعالية تصبح قصة تُروى بعناية وإبداع، لتبقى ذكرياتها خالدة
            في الأذهان
          </h1>
          <p className="text-white my-8 2lg:max-w-[690px] m-auto leading-[30px]">
            مرحباً بكم في عالم الفعاليات المبهرة! نحن هنا لنحول كل مناسبة إلى
            تجربة فريدة لا تُنسى، من خلال تنظيم فعاليات بأعلى مستويات الاحترافية
            والإبداع. دعونا نجعل من مناسبتكم القادمة حكاية تُروى بأجمل التفاصيل.
          </p>
          <div className="flex items-center justify-center pt-4">
            <button className="bg-[#6432E3] text-white rounded-[5px] h-[48px] w-[250px] mx-2">{t("InfoContent.btnOrderNow")}</button>
            <button className="border text-white rounded-[5px] h-[48px] w-[250px] mx-2">{t("InfoContent.SystemExperience")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
