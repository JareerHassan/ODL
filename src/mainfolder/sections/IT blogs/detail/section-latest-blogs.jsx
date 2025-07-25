'use client';
import Link from "next/link";
import ItodoImage from "../../../elements/itodo-img";

function SectionLatestBlogs() {
    return (
        <>
            <div className="sx-latest-blog-outer p-b70">
                {/* TITLE START */}
                <div className="section-head center">
                    <div className="sx-head-s-title">Our Blogs</div>
                    <div className="sx-head-l-title">
                        <h2 className="sx-title">Related Latest News</h2>
                    </div>
                </div>
                {/* TITLE END */}
                <div className="section-content">
                    <div className="row">
                        {/*One block*/}
                        <div className="col-lg-6 col-md-6">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <Link href="/blogs"><ItodoImage src="images/blog/blog-grid/pic1.jpg" alt="" /></Link>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><Link href="/blogs"><i className="fa fa-calendar" />05 Jan 2023</Link></li>
                                            <li className="post-author"><Link href="/blogs"><i className="fa fa-comments" />0 Comments</Link></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><Link href="/blogs">Standard size of business agency kal Consulat Latest Management.</Link></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <Link href="/blogs" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*One two*/}
                        <div className="col-lg-6 col-md-6">
                            <div className="sx-latest-post-st-1">
                                <div className="sx-post-media sx-img-effect img-reflection">
                                    <Link href="/blogs"><ItodoImage src="images/blog/blog-grid/pic2.jpg" alt="" /></Link>
                                </div>
                                <div className="sx-post-info p-t30">
                                    <div className="sx-post-meta ">
                                        <ul>
                                            <li className="post-date"><Link href="/blogs"><i className="fa fa-calendar" />05 Jan 2023</Link></li>
                                            <li className="post-author"><Link href="/blogs"><i className="fa fa-comments" />0 Comments</Link></li>
                                        </ul>
                                    </div>
                                    <div className="sx-post-title ">
                                        <h4 className="post-title"><Link href="/blogs">Standard size of business agency kal Consulat Latest Management.</Link></h4>
                                    </div>
                                    <div className="sx-post-readmore">
                                        <Link href="/blogs" title="READ MORE" rel="bookmark" className="site-button icon"><i className="fa  fa-long-arrow-right" />Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionLatestBlogs;