'use client'
import SectionSlider1 from "../../sections/home/index/section-slider1";
import SectionServices1 from "../../sections/home/index/section-services1";
import SectionVideo1 from "../../sections/home/index/section-case-study";
import SectionPricing1 from "../../sections/home/index/section-impact-industries";
import SectionClients1 from "../../sections/home/index/section-company-logos";
import SectionCaseStudy1 from "../../sections/home/index/section-case-study1";
import SectionBlogs1 from "../../sections/home/index/section-blogs1";
import TestimonialSection from "../../sections/home/index/testimonials";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import CompanySlider from "../../sections/home/index/CompanySlider.js";
import ShortsSection from "../../sections/home/index/ShortsSection.js";
import AchievementsSection from "../../sections/home/index/AcheivementSection.jsx";
import Slider from "../../sections/home/index/Slider.jsx";
import WorkflowSection from "../../sections/home/index/Workflow.jsx";
import ServicesNewSection from "../../sections/home/index/ServicesNewSection.jsx";

function Home1Page() {
  useEffect(() => {
    loadScript("js/custom.js");
  }, []);

  const Hr = () => (
    <div className="bg-black p-2">
      <hr className="px-5 mx-auto" style={{ height: "2px", backgroundColor: "white", border: "none" }} />
    </div>
  );


  return (
    <>
      <SectionSlider1 />
      <Hr />

      <SectionServices1 />
        <Hr />
      <CompanySlider />
      <Hr />

      <ServicesNewSection />
      <Hr />

      <SectionPricing1 />
      <Hr />
      <WorkflowSection />
      <Hr />

      < Slider />
      <Hr />

      <ShortsSection />
      <Hr />
      <AchievementsSection />
      <Hr />
      <SectionVideo1 />
      <Hr />

      <TestimonialSection />
      <Hr />

      <SectionClients1 />
      <Hr />

      <SectionBlogs1 />
    </>
  );
}

export default Home1Page;