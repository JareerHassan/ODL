import Banner from "../../../sections/common/banner";
import SectionAboutCompany1 from "../../../sections/home/index/section-services-card";

import { bannerData } from "../../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";
import SkillsLine from "../../../sections/home/index/section-skill";
import ServicesNewSection from "../../../sections/home/index/ServicesNewSection";
function ServicesPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
    <div className="bg-black"> 
      <Banner _data={bannerData.services} />
      <SectionAboutCompany1 />
      <SkillsLine />
      <ServicesNewSection />
   
      </div>
    </>
  );
}

export default ServicesPage;
