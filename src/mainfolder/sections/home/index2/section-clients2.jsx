"use client";
import Link from "next/link";
import Image from "next/image";

function SectionClients2({ hideTitle }) {
  return (
    <>
      <div className="section-full p-t110 p-b80 sx-client-logo-1-outer bg-black">
        <div className="container">
          {/* TITLE START */}
          {(hideTitle === undefined || hideTitle === null || !hideTitle) && (
            <div className="section-head center max-900">
              <div className="sx-head-s-title fw-bold">Our Clients</div>
              <div className="sx-head-l-title">
                <h2 className="sx-title2 text-white">
                  Our 1200 happy users around worldwide Itodo.
                </h2>
              </div>
            </div>
          )}

          {/* TITLE END */}
          <div className="section-content">
            <div className="client-grid m-b30">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />

                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />
                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />
                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />
                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />
                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />
                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />
                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <Link href="/contact-us" className="client-logo-pic">
                    <Image
                      src="/assets/images/client-logo/logo1.png"
                      alt=""
                      width={200}
                      height={100}
                    />
                    <div>
                      <span className="sx-circle-btn">
                        <i className="fa fa-long-arrow-right" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionClients2;
