import dynamic from "next/dynamic";
import Link from "next/link";
import Advertise from "../src/components/Advertise";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});
const BecomeAnInstructor = () => {
  return (
    <Layout>
      <PageBanner pageName={"Become An Instructor"} />
      <section className="join-our-team-area pt-120 rpt-90">
        <div className="container">
          <div className="row align-items-center large-gap">
            <div className="col-lg-6">
              <div className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-20">
                  <span className="sub-title-two">Join Our Team</span>
                  <h2>We’ve Experience Team Become an Instructor</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantiu doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo intore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut
                </p>
                <ul className="list-style-three pt-25 pb-20">
                  <li>
                    <div className="content">
                      <h5>Exclusive Coach</h5>
                      <p>Sit consectetur adipiscing eiuse tempor incides</p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Creative Minds</h5>
                      <p>Sit consectetur adipiscing eiuse tempor incides</p>
                    </div>
                  </li>
                </ul>
                <Link href="/become-instructor">
                  <a className="theme-btn">
                    become an instructor <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="join-our-team-image-part pt-5 wow fadeInRight delay-0-2s">
                <div className="image-one">
                  <img
                    src="assets/images/instructor/join-team1.jpg"
                    alt="Join Our Team"
                  />
                </div>
                <div className="image-two">
                  <img
                    src="assets/images/instructor/join-team2.jpg"
                    alt="Join Our Team"
                  />
                  <img
                    src="assets/images/instructor/join-team3.jpg"
                    alt="Join Our Team"
                  />
                </div>
                <div className="years-of-experience">
                  <b>25</b>
                  <span>Years Of Experience</span>
                </div>
                <span className="bg-text">coach</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Our Team End */}
      {/* Benefit Work Process Start */}
      <section className="benefit-work-process rel z-2 pt-120 rpt-90">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="sub-title-two">How About Learn Us</span>
            <h2>Discover More Benefits</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="bebefit-image rmb-75 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/benefit.jpg" alt="Bebefit" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bebefit-work-steps wow fadeInLeft delay-0-2s">
                <div className="work-step-item">
                  <span className="number">01</span>
                  <div className="content">
                    <h4>Make a Decision</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">02</span>
                  <div className="content">
                    <h4>Schedule a Meeting</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">03</span>
                  <div className="content">
                    <h4>Decision Analysis</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">04</span>
                  <div className="content">
                    <h4>Transformation Completed</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefit Work Process End */}
      {/* Counter Area Start */}
      <div className="counter-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="assets/images/counter/icon1.png" alt="Icon" />
                </div>
                <div className="success-item">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={2658}
                  >
                    <Counter end={2658} />
                  </span>
                  <span>Enrolled Student</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/counter/icon2.png" alt="Icon" />
                </div>
                <div className="success-item">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={9862}
                  >
                    <Counter end={9862} />
                  </span>
                  <span>Experts Advisors</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/counter/icon3.png" alt="Icon" />
                </div>
                <div className="success-item">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={785}
                  >
                    <Counter end={785} />
                  </span>
                  <span>Premium Lectures</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item wow fadeInUp delay-0-8s">
                <div className="icon">
                  <img src="assets/images/counter/icon4.png" alt="Icon" />
                </div>
                <div className="success-item">
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={4583}
                  >
                    <Counter end={4583} />
                  </span>
                  <span>Global Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area End */}
      {/* Rules & Conditions Area Start */}
      <section className="rules-condition-area pt-130 rpt-90">
        <div className="container">
          <div className="row align-items-center large-gap">
            <div className="col-lg-5">
              <div className="rules-condition-content rmb-50 wow fadeInLeft delay-0-2s">
                <div className="section-title">
                  <span className="sub-title-two">Rule &amp; Conditions</span>
                  <h2>How to Become a Our Pro Instructors</h2>
                </div>
                <ul className="list-style-three pt-10">
                  <li>
                    <div className="content">
                      <h5>Become an Instructor</h5>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Instructor Rules</h5>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h5>Start With Courses</h5>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rules-condition-image-part wow fadeInRight delay-0-2s">
                <div className="row align-items-center">
                  <div className="col-7">
                    <img
                      src="assets/images/about/rules-condition1.jpg"
                      alt="Rules"
                    />
                  </div>
                  <div className="col-5">
                    <img
                      src="assets/images/about/rules-condition2.jpg"
                      alt="Rules"
                    />
                  </div>
                </div>
                <div className="logo">
                  <img src="assets/images/logos/logo.png" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rules & Conditions Area End */}
      {/* Advertise Area Start */}
      <section className="advertise-area pt-130 rpt-100 pb-100 rpb-60">
        <div className="container">
          <Advertise />
        </div>
      </section>
    </Layout>
  );
};
export default BecomeAnInstructor;
