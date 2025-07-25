import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";
import SectionCounter1 from "./section-counter1";

function SectionAboutCompany1() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 bg-black sx-about-bx1-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx1-content-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-media">
                                        <div className="sx-dot-bx"><ItodoImage src="images/about/dotted-pic.jpg" alt="" /></div>
                                        <div className="sx-ab-img-outer">
                                            <div className="sx-ab-img-section-1-wrap">
                                                <div className="sx-ab-video">
                                                    <a href="https://www.youtube.com/watch?v=c1XNqw2gSbU" className="mfp-video circle">
                                                        <i className="flaticon-play" />
                                                    </a>
                                                </div>
                                                <div className="sx-ab-img-section-1" style={{ backgroundImage: `url(${publicUrlFor("images/about/dotted-pic.jpg")})` }} />
                                            </div>
                                            <div className="sx-ab-img-section-2">
                                                <ItodoImage src="images/about/dotted-pic.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1000ms">
                                    <div className="sx-about-bx1-content">
                                        <h2 className="sx-title">That's why we're list of favorites.</h2>
                                        <span className="sx-title-2">Nullam vel ligula lorem. Phasellus neque Etiam nequeretium.</span>
                                        <p>There are many variations of passage of Lorem Ipsum all item available, but the majority have suffered alteration in some form injected humour Nullam.</p>
                                        <div className="progress">
                                            <div className="progress-bar sx-bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><span>95.00% Work Success</span></div>
                                        </div>
                                        <div className="row sx-about-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Proin lobortis mauris vel dui egestas,non laoreet duolei hendrerit.</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <p>Fusce maximus turpis in magna cursus, vehicula bibendum sem placerat.</p>
                                            </div>
                                        </div>
                                        <div className="row sx-about-icon-bx1-column">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-mouse" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">IT Solution</span>
                                                        <span className="sx-icon-bx-title-info">02 Project</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sx-icon-bx-2">
                                                    <div className="sx-media">
                                                        <i className="flaticon-download" />
                                                    </div>
                                                    <div className="sx-icon-bx-info">
                                                        <span className="sx-icon-bx-title">IT Consultant</span>
                                                        <span className="sx-icon-bx-title-info">04 Project</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COUNTER START */}
                        <SectionCounter1 />
                        {/* COUNTER  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany1;