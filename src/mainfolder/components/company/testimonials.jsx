import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import TestimonialSection from "../../sections/home/index/testimonials";

function TestimonialsPage() {
    return (
        <>
            <Banner _data={bannerData.testimonials} />

            <div className="section-full  p-b0 bg-black mobile-page-padding">
                {/* TESTIMONIAL START */}
                <div className="container">
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head center">
                            <div className="sx-head-s-title fw-bold pt-4">Our Testimonials</div>
                            <div className="sx-head-l-title">
                                <h2 className="sx-title text-white">What Clients Say?</h2>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="masonry-outer mfp-gallery news-grid clearfix row  text-white">
                            {/* COLUMNS 1 */}
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                                <div className="testimonial-3  hover-animation-1 bg-black">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-user-info">
                                            <span className="testimonial-position">Founder Of Companey</span>
                                            <h4 className="testimonial-name  text-white">Oliver Eliah	Charlotte</h4>
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p className="text-white">Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna pretiumiss, ferment felis eget, cons exos. In etcou fringil aliber.</p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-quote sx-text-primary">
                                            <i className="flaticon-quote" />
                                        </div>
                                        <ul className="sx-rating-st1">
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                        </ul>
                                        <span className="sx-review-count">(5 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 2 */}
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                                <div className="testimonial-3  hover-animation-1 bg-black">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-user-info">
                                            <span className="testimonial-position">Founder Of Companey</span>
                                            <h4 className="testimonial-name text-white">Delilah Brooklyn</h4>
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p className="text-white">Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna pretiumiss, ferment felis eget, cons exos. In etcou fringil aliber.</p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-quote sx-text-primary">
                                            <i className="flaticon-quote" />
                                        </div>
                                        <ul className="sx-rating-st1">
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                        </ul>
                                        <span className="sx-review-count">(5 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 3 */}
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                                <div className="testimonial-3  hover-animation-1 bg-black">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-user-info">
                                            <span className="testimonial-position">Founder Of Companey</span>
                                            <h4 className="testimonial-name text-white">Oliver Eliah	Charlotte</h4>
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p className="text-white">Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna pretiumiss, ferment felis eget, cons exos. In etcou fringil aliber.</p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-quote sx-text-primary">
                                            <i className="flaticon-quote" />
                                        </div>
                                        <ul className="sx-rating-st1">
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                        </ul>
                                        <span className="sx-review-count">(5 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 4 */}
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                                <div className="testimonial-3  hover-animation-1 bg-black">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-user-info">
                                            <span className="testimonial-position">Founder Of Companey</span>
                                            <h4 className="testimonial-name text-white">Delilah Brooklyn</h4>
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p className="text-white">Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna pretiumiss, ferment felis eget, cons exos. In etcou fringil aliber.</p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-quote sx-text-primary">
                                            <i className="flaticon-quote" />
                                        </div>
                                        <ul className="sx-rating-st1">
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                        </ul>
                                        <span className="sx-review-count">(5 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 5 */}
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                                <div className="testimonial-3  hover-animation-1 bg-black">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-user-info">
                                            <span className="testimonial-position">Founder Of Companey</span>
                                            <h4 className="testimonial-name text-white">Oliver Eliah	Charlotte</h4>
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p className="text-white">Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna pretiumiss, ferment felis eget, cons exos. In etcou fringil aliber.</p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-quote sx-text-primary">
                                            <i className="flaticon-quote" />
                                        </div>
                                        <ul className="sx-rating-st1">
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                        </ul>
                                        <span className="sx-review-count">(5 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            {/* COLUMNS 6 */}
                            <div className="masonry-item  col-lg-4 col-md-6 col-sm-12 m-b30">
                                <div className="testimonial-3  hover-animation-1 bg-black">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-user-info">
                                            <span className="testimonial-position">Founder Of Companey</span>
                                            <h4 className="testimonial-name text-white">Delilah Brooklyn</h4>
                                        </div>
                                    </div>
                                    <div className="testimonial-text">
                                        <p className="text-white">Nullam cursus lacus insr veneni atis estas. Fusceri libero lorem, vehicul ege sapien id, faucibus vulp. Donec ut urna pretiumiss, ferment felis eget, cons exos. In etcou fringil aliber.</p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <div className="testimonial-quote sx-text-primary">
                                            <i className="flaticon-quote" />
                                        </div>
                                        <ul className="sx-rating-st1">
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                            <li><span><i className="fa fa-star" /></span></li>
                                        </ul>
                                        <span className="sx-review-count">(5 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TESTIMONIAL END */}
            </div>
           <TestimonialSection />
            <SectionClients2 />
        </>
    )
}

export default TestimonialsPage;