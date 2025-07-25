import { SectionPricing1Inner } from "../../home/index/section-impact-industries";
import { SectionWhyChooseUs2Inner } from "../../home/index2/section-why-choose-us2";

function SectionWhyChooseUs4() {
    return (
        <>
            <div className="section-full  p-t100 p-b0 bg-black sx-about-bx4-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx4-content-wrap p-b70">
                            <SectionWhyChooseUs2Inner />
                        </div>
                    </div>
                </div>
                <SectionPricing1Inner />
            </div>
        </>
    )
}

export default SectionWhyChooseUs4;