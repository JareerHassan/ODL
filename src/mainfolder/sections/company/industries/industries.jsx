
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { loadScript } from "../../../../globals/constants";
import { BiCheckDouble } from 'react-icons/bi';


// import SectionVideo2 from "../../../sections/home/index2/section-video2"
// import SectionWhyChooseUs4 from "../../../sections/company/about/section-why-choose-us4"
// import SectionClients2 from "../../../sections/home/index2/section-clients2"
// import SectionCounter1 from "../../../sections/home/index/section-counter1";


const images = [
  {
    src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674ec359dced2d8d71823a88_Smart%20Asset%20Management%20with%20IoT-p-1600.jpg",
    title: "Insightful Data Analytics for Targeted Marketing",
    text: "Extract actionable insights from customer data to build more effective marketing campaigns that resonate with audience needs."
  },
  {
    src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eb6552bfc1889e05603fd_AI-Built%20Recommender%20System-p-1600.jpg",
    title: "AI-Built Recommender System",
    text: "Leverage AI to offer personalized product recommendations and curated content, creating a shopping experience that feels unique to each customer."
  },
  {
    src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eb66aa944d05429ad43aa_Cloud-Driven%20Scalability%20for%20eCommerce-p-1600.jpg",
    title: "Cloud-Driven Scalability for eCommerce",
    text: "Our cloud-based solutions ensure your platform can handle peak traffic periods effortlessly, offering scalability and resilience for seamless operation."
  },
  {
    src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eb67d242fba76abf0778f_Omnichannel%20Experience%20Integration-p-1600.jpg",
    title: "Omnichannel Experience Integration",
    text: "Achieve a consistent customer experience across platforms with omnichannel integrations, bringing together in-store and online interactions."
  },
  {
    src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eb69167fbf5ffe14a9cd9_User-Centric%20UX_UI%20Design%20Solutions-p-1600.jpg",
    title: "User-Centric UX/UI Design Solutions",
    text: "Ensure your digital storefronts are intuitive, accessible, and optimized to enhance the customer journey and increase engagement."
  },
  {
    src: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eb6a880b693672f9eca40_IoT%20Solutions%20for%20Real-Time%20Inventory%20and%20Supply%20Chain%20Tracking-p-1600.jpg",
    title: "IoT Solutions for Real-Time Inventory and Supply Chain Tracking",
    text: "Use IoT to manage inventory in real-time, streamline logistics, and provide customers with up-to-date product availability and delivery timelines."
  }
];




function Industries() {

 useEffect(() => {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add('revealed');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // on load

  return () => window.removeEventListener('scroll', revealOnScroll);
}, []);



    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* service detail SECTION START */}
            <div className="section-full p-b80 sx-ser-detail-outer bg-black">
    <div className="sx-ser-detail-l-pic p-b80">
  <div className="sx-media position-relative" style={{ height: '80vh', overflow: 'hidden' }}>
 <Image
  src="/assets/images/slider-3.jpg"
  alt="image"
  width={1200}
  height={600}
  className="w-100 h-100"
  style={{ objectFit: 'cover' }}
/>


    {/* Centered Overlay Content */}
    <div
      className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-75  text-white rounded-4 p-5 w-75"
    >
      <p className="fs-5 fw-bold mb-1">Oil, Gas, and Energy</p>
      <h2 className="fw-bold mb-3">Powering the Future of Energy</h2>

      <button
        className="btn rounded-pill px-4 py-2 fw-bold fs-6"
        style={{
          backgroundColor: '#ff0055',
          color: 'white',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#ff0055';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ff0055';
          e.target.style.color = 'white';
        }}
      >
        Power The Future With IT
      </button>

      <p className="fs-6 fw-bold text-white mt-3 mb-0">
        Innovative Solutions for a Resilient and Sustainable Oil, Gas, and Minerals Industry
      </p>
    </div>
  </div>
</div>



              <div className="container py-5">
  <div className="section-content">
    <div className="sx-our-service-detail d-flex flex-column flex-lg-row align-items-center gap-4">
      
      {/* Left Content */}
      <div className="text-content col-lg-6">
        {/* TITLE START */}
        <div className="section-head2 mb-4">
          <div className="sx-head-s-title fw-bold">Overview</div>
          <h4 className="text-white fw-bold">
            Driving Industry <span style={{ color: '#ff0055' }}>Transformation in Oil,</span> Gas, and Minerals <br /> with Devsinc
          </h4>
        </div>
        {/* TITLE END */}

        <div className="sx-our-service-info fs-5 text-white">
          <p>
            As the energy sector evolves, companies in oil, gas, and<br /> minerals face the challenge of balancing operational<br /> efficiency, compliance, and sustainability.
          </p>
          <p>
            Devsinc delivers advanced digital solutions designed to help<br /> businesses optimize production, reduce costs, and meet<br /> stringent environmental standards. With our deep industry<br /> expertise, we enable energy leaders to streamline operations<br /> and advance their journey toward achieving net-zero goals.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="img-content col-lg-6">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674ec17f968c7c62239d2fa7_Oil%2C%20Gas%2C%20and%20Energy%20overview%20-p-1600.jpg"
          alt="Oil Gas Overview"
          className="img-fluid rounded"
        />
      </div>

    </div>
  </div>
</div>
   
   {/* Second Section */}

 <div className="container py-5 mt-4 ">
  <div className="row align-items-center gx-5 gy-5 ">
    
    {/* Left Content */}
    <div className="col-12 col-lg-5">
      <p className="fs-5 fw-bold" style={{ color: '#ff0055' }}>
        Key challenges of the industry
      </p>
      <h4 className="text-white fw-bold">
        Our solutions directly address the complex pain 
        points facing the oil, gas, and minerals sectors:
      </h4>
    </div>

    {/* Right Content (Checklist) */}
    <div className="col-12 col-lg-7">
      
      {/* Each Point */}
      <div className="d-flex gap-2 mb-3">
        <BiCheckDouble className="text-white fs-3" />
        <div>
          <p className="fs-6 fw-semibold text-white mb-2">
            Operational Efficiency Amidst Rising Costs: Automation and <br />
            advanced analytics help streamline workflows and reduce overhead<br />
            costs, ensuring profitability.
          </p>
          <hr className="text-white" />
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <BiCheckDouble className="text-white fs-3" />
        <div>
          <p className="fs-6 fw-semibold text-white mb-2">
            Environmental Compliance and Sustainability: Devsinc’s sustainable<br />
            solutions aid in emissions tracking, waste reduction, and compliance<br />
            with ever-evolving regulations.
          </p>
          <hr className="text-white" />
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <BiCheckDouble className="text-white fs-3" />
        <div>
          <p className="fs-6 fw-semibold text-white mb-2">
            Supply Chain Optimization: Minimize disruptions with logistics and <br />
            supply chain solutions that improve visibility and resilience.
          </p>
          <hr className="text-white" />
        </div>
      </div>

      <div className="d-flex gap-2 mb-3">
        <BiCheckDouble className="text-white fs-3" />
        <div>
          <p className="fs-6 fw-semibold text-white mb-2">
            Data Security for Critical Infrastructure: Protect against cyber threats <br />
            with specialized security measures for energy data and <br />
            infrastructure.
          </p>
          <hr className="text-white" />
        </div>
      </div>
         
    </div>
  </div>

  
  <div className="text-center mt-4">
  <button className="responsive-btn">
Get Growth With E-commerce
  </button>
</div>

</div>

 
    <div className="d-flex flex-wrap justify-content-start gap-5 p-3 ">

      <div className="responsive-card border p-3 rounded-4 ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eef751c3bd08c7641d71d_10-p-1600.png"
          className="h-25 mx-auto d-block"
          alt="Card 1"
        />
        <h2 className="text-white mt-2 text-center">
          Digital <br /> Transformation <br /> and Automation
        </h2>
        <p className="text-white text-center mt-2">
          Modernize operations with scalable <br />
          solutions that streamline processes, <br />
          increase efficiency, and drive down <br />
          costs.
        </p>
      </div>

      <div className="responsive-card border p-3 rounded-4">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eef9e6b3750c90768756a_14-p-1600.png"
          className="h-25 mx-auto d-block"
          alt="Card 2"
        />
        <h2 className="text-white mt-2 text-center">
          Supply Chain Resilience <br /> and Logistics Management
        </h2>
        <p className="text-white text-center mt-2">
          Improve supply chain resilience with <br />
          data-driven insights that optimize <br />
          logistics, reduce downtime, and ensure <br />
          product availability.
        </p>
      </div>

      <div className="responsive-card border p-3 rounded-4 ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eef7ffb1dbbfba60f9d35_9-p-1600.png"
          className="h-25 mx-auto d-block"
          alt="Card 3"
        />
        <h2 className="text-white mt-2 text-center">
          Sustainable Practices <br /> and Compliance
        </h2>
        <p className="text-white text-center mt-2">
          Integrate sustainable practices with <br />
          solutions focused on emissions <br />
          reduction, waste management, and <br />
          environmental compliance.
        </p>
      </div>

      <div className="responsive-card border p-3 rounded-4 ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eefcde1374844d9e41a03_21-p-1600.png"
          className="h-25 mx-auto d-block"
          alt="Card 4"
        />
        <h2 className="text-white mt-2 text-center">
          Predictive <br /> Analytics and <br /> IoT
        </h2>
        <p className="text-white text-center mt-2">
          Use predictive analytics and IoT <br />
          solutions to enhance equipment <br />
          maintenance and productivity.
        </p>
      </div>

      <div className="responsive-card border p-3 rounded-4 ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674eefe435ed4be8913a3c61_3-p-1600.png"
          className="h-25 mx-auto d-block"
          alt="Card 5"
        />
        <h2 className="text-white mt-2 text-center">
          Cybersecurity for <br /> Energy Infrastructure
        </h2>
        <p className="text-white text-center mt-2">
          Safeguard critical infrastructure with <br />
          tailored cybersecurity solutions for the <br />
          energy industry.
        </p>
      </div>

      
    </div>

    
  <div className="text-center mt-4">
  <button className="responsive-btn">
    Drive Sustainable IT Solutions
  </button>
</div>




      <div className="img h-100 mt-5">
  <h2 className="text-white text-center mt-5 font-semibold">
    Our Solutions Specific to The Industry
  </h2>

  <div className="grid-container">
    {images.map((item, index) => (
      <div className="image-container" key={index}>
        <img src={item.src} alt={item.title} className="main-image" />
        <div className="overlay-text">
          <h3>{item.title}</h3>
          <p className="hidden-text">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</div>
         

    <div
  className="d-flex flex-wrap align-items-center justify-content-center px-4 py-5"
  style={{ gap: '2rem' }}
>
  {/* LEFT TEXT SECTION */}
  <div className="col-12 col-lg-5 text-center text-lg-start">
    <p className="fs-5 fw-bold" style={{ color: '#ff0055' }}>
      Featured Insights
    </p>
    <h2 className="text-white fw-bold">
      Stories of our<br /> transformations across<br /> Services and Industries
    </h2>
    <p className="text-white fs-4">From Concept to Completion</p>
    <button
      className="btn rounded-pill px-4 py-2 fw-bold fs-6"
      style={{
        backgroundColor: '#ff0055',
        color: 'white',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.color = '#ff0055';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#ff0055';
        e.target.style.color = 'white';
      }}
    >
      Explore More
    </button>
  </div>

  {/* RIGHT IMAGES SECTION */}
  <div className="d-flex flex-wrap justify-content-center gap-4">
    {/* Repeat this block for each column of images */}
    <div className="d-flex flex-column gap-4 mt-5">
      {/* CARD 1 */}
      <div className="image-box scroll-reveal ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/677e26a1461d4ae7dc6f5f9f_Recurate%402x-100.avif"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Case Study</p>
          <p className="case-desc">
            Enabling Seamless Resale Operations Across E-Commerce
          </p>
        </div>
      </div>

      <div className="image-box scroll-reveal ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67321c409e575f0f0e264d3f_linkedin-sales-solutions--AXDunSs-n4-unsplash.webp"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Blogs</p>
          <p className="case-desc">
            How Cloud Computing Can Transform Small Businesses
          </p>
        </div>
      </div>
    </div>

    <div className="d-flex flex-column gap-4 mt-3">
      {/* CARD 2 */}
      <div className="image-box scroll-reveal">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/674703369b972f18df57ceb8_Custom%20Web%20Application%20Development-p-1600.avif"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Blogs</p>
          <p className="case-desc">
            Custom Web Application Development: Everything You Need to Know
          </p>
        </div>
      </div>

      <div className="image-box scroll-reveal"   >
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67470336706b2fbb2120631e_Trends%20of%20Mobile%20Design-p-1600.avif"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Blogs</p>
          <p className="case-desc">
            Trends of Mobile Design: What's Next for Your Business?
          </p>
        </div>
      </div>

      <div className="image-box scroll-reveal">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/674703370ee5ac69d196b247_How%20Generative%20AI%20is%20Transforming%20Business%20Operations-p-1600.avif"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Blogs</p>
          <p className="case-desc">
            How Generative AI is Transforming Business Operations
          </p>
        </div>
      </div>
    </div>

    <div className="d-flex flex-column gap-4">
      {/* CARD 3 */}
      <div className="image-box scroll-reveal  " >
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67470336fba9bac4339373bb_Automated%20Financial%20-p-1600.avif"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Case Study</p>
          <p className="case-desc">
            Empowering XQUIC for Automated Financial Accuracy
          </p>
        </div>
      </div>

      <div className="image-box scroll-reveal  ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67470337078adf75438b8c39_Global%20Communications-p-1600.avif"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Case Study</p>
          <p className="case-desc">
            KUDO’s Journey to Bridging Global Communications
          </p>
        </div>
      </div>

      <div className="image-box scroll-reveal  ">
        <img
          src="https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/677e2658c356ff9f607853a6_RMI%402x-100.avif"
          className="shortimg"
          alt="case study"
        />
        <div className="text-overlay">
          <p className="case-label">Case Study</p>
          <p className="case-desc">
            Automating Financial Insights for Smarter Business Decisions
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


            </div>
       
            
        </>
    )
}

export default  Industries;