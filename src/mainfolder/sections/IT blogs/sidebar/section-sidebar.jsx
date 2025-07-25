import SectionSearch from "./section-search";
import SectionCategories from "./section-categories";
import SectionLatestNews from "./section-latest-news";
import SectionGallery from "./section-gallery";
import SectionSocialIcons from "./section-social-icons";

function SectionSidebar() {
    return (
        <>
            <div className="side-bar bg-black">
                <SectionSearch />
                <SectionCategories />
                <SectionLatestNews />
                <SectionGallery />
                <SectionSocialIcons />
            </div>
        </>
    )
}
export default SectionSidebar;