import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";


export function Home() {
  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
  };
  const mainContainerStyle = {
    backgroundColor: '#f2f2f2', 
    padding: '20px', 
  };

  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    marginTop: '20px',
  };
  return (
    <div style={mainContainerStyle}>
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
      <div style={{ padding: '20px' }}>
        <h1>Jal Jeevan Mission</h1>
        <p >
          Jal Jeevan Mission is envisioned to provide safe and adequate drinking water through individual household tap connections by 2024 to all households in rural India. The program will also implement source sustainability measures as mandatory elements, such as recharge and reuse through grey water management, water conservation, rainwater harvesting. The Jal Jeevan Mission will be based on a community approach to water and will include extensive Information, Education, and communication as a key component of the mission. JJM looks to create a jan andolan for water, thereby making it everyone’s priority.
        </p>
      </div>
      <div style={{ padding: '20px' }}>
        <h1 style={{color:"blue"}}>Key Facts about our water:</h1>
        <p>
          Water is the most important natural resource that living things need. But at the same time, it has also been misused and wasted. To better grasp the full significance of water conservation, take a look at the few yet key facts about water:
          <br />
          - The average adult human body comprises 50-65 percent of water. They are averaging around 57-60 percent. Infants have a higher percentage, often around 75-78% water, dropping to 65% by one year.
          <br />
          - The Earth has a limited amount of water. The water we have now is all we get, recycled repeatedly. The water cycle can help you understand this condition.
          <br />
          - Water is the basic demand for every food. It grows our fruits and vegetables, and each livestock consumes it.
          <br />
          - A plant's life is dependent on water. Plants help the ecosystem and produce the oxygen necessary to keep us healthy. Trees are generally used for housing, paper, and much more.
          <br />
          - Ninety-seven percent (97%) of all water on Earth is saltwater- which is not suitable for drinking.
          <br />
          - Only three percent (3%) of water on Earth is freshwater. Only 0.5% is available and is suitable for drinking.
          <br />
          - The other 2.5% of freshwater is found in glaciers, ice caps, the atmosphere, soil, or under the Earth's surface or is too polluted for consumption.
        </p>
      </div>
      <footer style={footerStyle}>
        <div className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col sitefooter">
                &nbsp; &nbsp;
                <a href="https://jaljeevanmission.gov.in/website-policies" style={{ color: 'white' }}>Website Policies</a> &nbsp; &nbsp; <img src="https://jaljeevanmission.gov.in//themes/edutheme/images/line.png" alt="line" />
                <a href="https://jaljeevanmission.gov.in/accessibility-statement" style={{ color: 'white' }}>Accessibility Statement</a> <img src="https://jaljeevanmission.gov.in//themes/edutheme/images/line.png" alt="line" />
                <a href="https://jaljeevanmission.gov.in/site-map" style={{ color: 'white' }}>Sitemap</a><img src="https://jaljeevanmission.gov.in//themes/edutheme/images/line.png" alt="line" />
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
