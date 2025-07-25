import Banner from "../../sections/common/banner";
import SectionAboutCompany1 from "../../sections/home/index/section-services-card.jsx";
import Companies from "../../sections/home/index/section-company-logos.jsx";
import SectionVideo2 from "../../sections/home/index2/section-video2";
import SectionWhyChooseUs4 from "../../sections/company/about/section-why-choose-us4";
import About from "../../sections/home/index/Aboutus.jsx";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";


function AboutUsPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.about} />
            <About />
                  <Companies />


            {/* <SectionAboutCompany1 />
            <SectionServices1/>
            <SectionVideo2 />
            <SectionWhyChooseUs4 />
            <SectionClients2 /> */}
        </>
    )
}

export default AboutUsPage;