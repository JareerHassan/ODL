'use client';
import Link from "next/link";
import ItodoImage from "../../../elements/itodo-img";



function SectionLatestNews() {
    return (
        <>
            <div className="widget  recent-posts-entry">
                <h4 className="widget-title  ">Latest News</h4>
                <div className="section-content">
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/blog/recent-blog/pic1.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                    <ul>
                                        <li className="post-date"><Link href="/services/detail"><i className="fa fa-calendar" />01 Jan 2023</Link></li>
                                        <li className="post-author"><Link href="/services/detail"><i className="fa fa-comments" />0 Comments</Link></li>
                                    </ul>
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><Link href="/services/detail">Standard of business agency kal Consulat Latest Management.</Link></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <Link href="/services/detail" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-dev-line" />
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/blog/recent-blog/pic2.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                    <ul>
                                        <li className="post-date"><Link href="/services/detail"><i className="fa fa-calendar" />01 Jan 2023</Link></li>
                                        <li className="post-author"><Link href="/services/detail"><i className="fa fa-comments" />0 Comments</Link></li>
                                    </ul>
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><Link href="/services/detail">Standard of business agency kal Consulat Latest Management.</Link></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <Link href="/services/detail" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-dev-line" />
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/blog/recent-blog/pic3.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                    <ul>
                                        <li className="post-date"><Link href="/services/detail"><i className="fa fa-calendar" />01 Jan 2023</Link></li>
                                        <li className="post-author"><Link href="/services/detail"><i className="fa fa-comments" />0 Comments</Link></li>
                                    </ul>
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><Link href="/services/detail">Standard of business agency kal Consulat Latest Management.</Link></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <Link href="/services/detail" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionLatestNews;