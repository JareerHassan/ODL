import { useEffect } from "react";
import Banner from "../../../sections/common/banner";
import SectionAboutCompany1 from "../../../sections/home/index/section-services-card";
import SkillsLine from "../../../sections/home/index/section-skill";
import ServicesNewSection from "../../../sections/home/index/ServicesNewSection";
import { bannerData } from "../../../../globals/banner";
import { loadScript } from "../../../../globals/constants";

function ServicesPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      loadScript("js/custom.js");
    }
  }, []); 

  return (
    <div className="bg-black"> 
      <Banner _data={bannerData.services} />
      <SectionAboutCompany1 />
      <SkillsLine />
      <ServicesNewSection />
    </div>
  );
}

export default ServicesPage;
