import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import { Container } from 'react-bootstrap';

export function Home() {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div>
      <main>
        <Carousel fade>
          <Carousel.Item>
            <img src={img1} style={imgStyle} alt="Image 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} style={imgStyle} alt="Image 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} style={imgStyle} alt="Image 3" />
          </Carousel.Item>
        </Carousel>
      </main>

      <footer style={{ backgroundColor: "black", color: "white" }}>
        <div className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col sitefooter">
                &nbsp; &nbsp;
                <a href="https://jaljeevanmission.gov.in/website-policies">Website Policies</a> &nbsp; &nbsp; <img src="https://jaljeevanmission.gov.in//themes/edutheme/images/line.png" />
                <a href="https://jaljeevanmission.gov.in/accessibility-statement">Accessibility Statement</a> <img src="https://jaljeevanmission.gov.in//themes/edutheme/images/line.png" />
                <a href="https://jaljeevanmission.gov.in/site-map">Sitemap</a><img src="https://jaljeevanmission.gov.in//themes/edutheme/images/line.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="footertext">
          <div className="container">
            <div className="row ">
              <div className="col-xl-4 col-lg-4 col-md-6 mt-4">
                <span className="p-footer">
                  Website Content Managed by<br /> Department of Drinking Water and Sanitation, <br />Ministry of Jal Shakti,<br /> Designed, Developed and Hosted by<br /> National Informatics Centre( NIC )
                </span>
                <p className="nic-logo mb-4"><img src="https://jaljeevanmission.gov.in//themes/edutheme/images/nic-logo.png" alt="NIC Logo" /></p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6"></div>
              <div className="col-xl-4 col-lg-4 col-md-6 mt-4 mb-2">
                <span className="contactustext">Contact Us</span><br /><span className="p-footer"> Office of Mission Director<br /> National Jal Jeevan Mission (NJJM)<br /> Department Of Drinking Water And Sanitation<br /> Ministry Of Jal Shakti
                  <br /> 4th Floor, Pandit Deendayal Antyodaya Bhawan, CGO Complex, Lodhi Road, New Delhi-110003</span>
                <span className="footer-space p-footer"><br /><br /> Phone-011-24362705,
                  Fax-011-24361062<br /><br /> Email-njjm[dot]ddws[at]gov[dot]in</span>
                <br /><br />
                <span className="img-fluid">
                  <a href="https://www.facebook.com/pages/category/Government-Organization/Jal-Jeevan-Mission-India-100947117940558/" target="_blank"><img src="https://jaljeevanmission.gov.in//themes/edutheme/images/fb.jpg" className="img-fluid" alt="Facebook" /></a>&nbsp;
                  <a href="https://twitter.com/jaljeevan_" target="_blank"><img src="https://jaljeevanmission.gov.in//themes/edutheme/images/twitter.jpg" className="img-fluid" alt="Twitter" /></a>&nbsp;
                  <a href="https://www.instagram.com/jaljeevanmission/" target="_blank"><img src="https://jaljeevanmission.gov.in//themes/edutheme/images/insta.jpg" className="img-fluid" alt="Instagram" /></a>&nbsp;
                  <a href="https://www.youtube.com/c/JalJeevanMission" target="_blank">
                    <img src="https://jaljeevanmission.gov.in//themes/edutheme/images/youtube.jpg" className="img-fluid" alt="YouTube" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="wpfront-scroll-top-container" style={{ opacity: 0.8, right: 20, bottom: 20, display: 'block' }}>
          <a href="#"> </a>
        </div>
      </footer>
    </div>
  );
}
