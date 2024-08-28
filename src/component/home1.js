import Futer from "./fouter";
import Home from "./header";
import "./home1.css";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { IoLogoPaypal } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoColorPalette } from "react-icons/io5";

function Home1() {
  return (
    <>
      <Home></Home>
      <div className="homdiv" style={{ width: "100%", height: "600px" }}>
        <div className="h1div">
          {" "}
          <h1>
            Software Design & <br />
            Development <br /> Company
          </h1>
          <hr style={{ color: "#24D39B" }} />
          <p style={{ color: "white" }}>
            Creating beautiful digital products engineered to drive <br />
            growth for the world's leading brands{" "}
          </p>
          <Link to={"/contect"}>
            <button
              style={{
                backgroundColor: "orange",
                border: "2px",
                borderRadius: "5px",
                fontFamily: "cursive",
              }}>
              Contact Now
            </button>
          </Link>
        </div>
      </div>
      <div>
        {/* <h2>Services</h2>
<p>We Are Offering All Kinds of IT Solutions Service</p> */}
        <section
          id="advertisers"
          className="advertisers-service-sec pt-5 pb-5"
          style={{ margin: "40px" }}>
          <div className="container">
            <div className="row">
              <div className="section-header text-center">
                <h2 className="fw-bold fs-1">
                  Our
                  <span class="b-class-secondary"> Advertiser </span>Services
                </h2>
                <p class="sec-icon">
                  <i class="fa-solid fa-gear"></i>
                </p>
              </div>
            </div>
            <div class="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
              <div class="col">
                <div class="service-card">
                  <div class="icon-wrapper">
                    <TbSocial />
                  </div>
                  <h3>Social Media Marketing</h3>
                  <p>
                    Social Media Marketing (SMM) is a digital marketing strategy
                    that utilizes social media platforms to connect with the
                    target audience, build brand awareness, drive website
                    traffic, and achieve marketing and business goals.
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="service-card">
                  <div class="icon-wrapper">
                    <MdOutlineScreenSearchDesktop />
                  </div>
                  <h3>Search Enginl Optimization</h3>
                  <p>
                    SEO, or Search Engine Optimization, holds paramount
                    importance for a diverse range of entities and individuals.
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="service-card">
                  <div class="icon-wrapper">
                    <FaCode></FaCode>
                  </div>
                  <h3>Web Development</h3>
                  <p>
                    Having a website is indispensable for businesses in the
                    contemporary digital landscape, and its significance stems
                    from various compelling reasons.
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="service-card">
                  <div class="icon-wrapper">
                    <IoLogoPaypal />
                  </div>
                  <h3>Pay Per Click</h3>
                  <p>
                    Pay-Per-Click (PPC) advertising offers businesses a host of
                    benefits, playing a crucial role in enhancing visibility,
                    reaching targeted audiences, and delivering measurable
                    outcomes.
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="service-card">
                  <div class="icon-wrapper">
                    <FaPeopleGroup />
                  </div>
                  <h3>Lead Generation</h3>
                  <p>
                    Lead generation is paramount for businesses, serving as a
                    cornerstone for sustained growth and long-term success
                  </p>
                </div>
              </div>
              <div class="col">
                <div class="service-card">
                  <div class="icon-wrapper">
                    <IoColorPalette />
                  </div>
                  <h3> Graphic design</h3>
                  <p>
                    Graphic design is indispensable for businesses as it plays a
                    pivotal role in crafting a visual representation of a brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section class="testimonial-section">
          <div class="large-container">
            <div class="sec-title">
              <span class="title">Raw Media</span>
              <h2>What Our core client say ?</h2>
            </div>

            <div class="testimonial-carousel owl-carousel owl-theme">
              <div class="testimonial-block">
                <div class="inner-box">
                  <div class="text">
                    Raw Media is the best software development company I have
                    ever worked with. They are highly skilled, experienced, and
                    professional. I would highly recommend them to anyone.
                  </div>
                  <div class="info-box">
                    <div class="thumb">
                      <img
                        src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                        alt=""
                      />
                    </div>
                    <h4 class="name">MR Beat</h4>
                    <span class="designation">Ui Designer & CEO</span>
                  </div>
                </div>
              </div>

              {/* <div class="testimonial-block">
					<div class="inner-box">
						<div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
						<div class="info-box">
							<div class="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt=""/></div>
							<h4 class="name">Mahfuz Riad</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
				</div> */}

              {/* <div class="testimonial-block">
					<div class="inner-box">
						<div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
						<div class="info-box">
							<div class="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
							<h4 class="name">Mahfuz Riad</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
				</div> */}
            </div>

            <div class="thumb-layer paroller">
              <figure class="image">
                <img
                  src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section>
      </div>
      <Futer></Futer>
    </>
  );
}
export default Home1;
