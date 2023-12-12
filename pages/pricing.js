import Link from "next/link";
import Advertise from "../src/components/Advertise";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const PricingPlan = () => {
  return (
    <Layout>
      <PageBanner pageName={"Pricing Plan"} />
      <section className="pricing-section-two rel z-2 pt-120 rpt-90 pb-130 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="sub-title-two">Pricing Package</span>
            <h2>Membership Plans</h2>
          </div>
          <div className="row no-gap justify-content-center">
            <div className="col-xl-3 col-md-6">
              <div className="pricin-item style-two wow fadeInUp delay-0-2s">
                <span className="popularity">popular</span>
                <h4>Full Free</h4>
                <b>Membership</b>
                <span className="price">0</span>
                <ul className="list-style-two">
                  <li>Free Course Include</li>
                  <li>Part Time Instructors</li>
                  <li>Free Videos Course</li>
                  <li>Free Access 1 Month</li>
                </ul>
                <Link href="/pricing">
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="pricin-item style-two wow fadeInUp delay-0-4s">
                <span className="popularity">popular</span>
                <h4>3 Month</h4>
                <b>Membership</b>
                <span className="price">19</span>
                <span className="save">Save 20%</span>
                <ul className="list-style-two">
                  <li>Course Include : 5</li>
                  <li>Full Time Instructors</li>
                  <li>Premium Videos Course</li>
                  <li>Pro Access 6 Month</li>
                </ul>
                <Link href="/pricing">
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="pricin-item style-two wow fadeInUp delay-0-6s">
                <span className="popularity">popular</span>
                <h4>6 Month</h4>
                <b>Membership</b>
                <span className="price">48</span>
                <span className="save">Save 39%</span>
                <ul className="list-style-two">
                  <li>Course Include : 7</li>
                  <li>Full Time Instructors</li>
                  <li>Premium Videos Course</li>
                  <li>Pro Access 1 Year</li>
                </ul>
                <Link href="/pricing">
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="pricin-item style-two wow fadeInUp delay-0-8s">
                <span className="popularity">popular</span>
                <h4>12 Month</h4>
                <b>Membership</b>
                <span className="price">98</span>
                <span className="save">Save 65%</span>
                <ul className="list-style-two">
                  <li>Course Include : 13</li>
                  <li>Full Time Instructors</li>
                  <li>Premium Videos Course</li>
                  <li>Pro Access 1 Year</li>
                </ul>
                <Link href="/pricing">
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}
      {/* Pricing Section Start */}
      <section className="pricing-section bg-lighter rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="sub-title-two">Pricing Package</span>
            <h2>Membership Plans</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricin-item wow fadeInUp delay-0-2s">
                <span className="popularity">popular</span>
                <div className="icon">
                  <img src="assets/images/pricing/icon1.png" alt="Icon" />
                </div>
                <h4>Free Membership</h4>
                <ul className="list-style-two">
                  <li>Free Course Include</li>
                  <li>Part Time Instructors</li>
                  <li>Free Videos Course</li>
                  <li>Free Access 1 Month (Videos)</li>
                </ul>
                <span className="price">0</span>
                <Link href="/pricing">
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricin-item wow fadeInUp delay-0-4s">
                <span className="popularity">popular</span>
                <div className="icon">
                  <img src="assets/images/pricing/icon2.png" alt="Icon" />
                </div>
                <h4>Basic Membership</h4>
                <ul className="list-style-two">
                  <li>Pro Course Include : 07</li>
                  <li>Full Time Experts Instructors</li>
                  <li>Premium Videos Course</li>
                  <li>Pro Access 6 Month (Videos)</li>
                </ul>
                <span className="price">39</span>
                <Link href="/pricing">
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricin-item wow fadeInUp delay-0-6s">
                <span className="popularity">popular</span>
                <div className="icon">
                  <img src="assets/images/pricing/icon3.png" alt="Icon" />
                </div>
                <h4>Advance Membership</h4>
                <ul className="list-style-two">
                  <li>Pro Course Include : 15</li>
                  <li>Full Time Experts Instructors</li>
                  <li>Premium Videos Course</li>
                  <li>Pro Access 12 Month (Videos)</li>
                </ul>
                <span className="price">98</span>
                <Link href="/pricing">
                  <a className="theme-btn style-two">
                    Choose plan <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}
      {/* Advertise Area Start */}
      <section className="advertise-area pt-130 rpt-100 pb-100 rpb-60">
        <div className="container">
          <Advertise />
        </div>
      </section>
    </Layout>
  );
};
export default PricingPlan;
