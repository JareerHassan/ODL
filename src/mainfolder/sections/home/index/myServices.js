import React from 'react';
import {
  FaPencilRuler,
  FaProjectDiagram,
  FaCogs,
  FaUsers,
  FaSearch,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Web & Mobile Apps, SAAS',
    icon: <FaPencilRuler size={60} />,
    description:
      'We specialize in developing modern, high-performance web and mobile applications that are responsive, scalable, and user-centric. From MVPs for startups to full-fledged enterprise platforms, our team delivers tailored solutions using the latest frameworks and cloud technologies. We also create SaaS (Software as a Service) applications with subscription models, admin panels, user management, analytics dashboards, and integrations with third-party services such as Stripe, Firebase, and AWS. Your digital product will be crafted for performance, security, and a seamless user experience across devices.',
    angle: '4deg',
    prev: 5,
    next: 2,
  },
  {
    id: 2,
    title: 'Digital Transformation',
    icon: <FaProjectDiagram size={60} />,
    description:
      'Stay competitive by transforming your business into a digital-first organization. We help automate manual processes, integrate smart tools like AI and IoT, migrate data to the cloud, and implement workflow automation across departments. Whether it’s modernizing outdated software, streamlining internal communication, or adopting agile practices, our transformation services are designed to increase efficiency, reduce costs, and improve decision-making through actionable insights and data analytics.',
    angle: '-8deg',
    prev: 1,
    next: 3,
  },
  {
    id: 3,
    title: 'Dynamics 365 CRM, ERP',
    icon: <FaCogs size={60} />,
    description:
      'Harness the power of Microsoft Dynamics 365 to manage and grow your business operations. We implement CRM systems for sales automation, customer engagement, and service management. For finance, HR, and supply chain, our ERP solutions streamline your back-office functions into one integrated platform. Our services include consulting, deployment, customization, training, and support—ensuring you get a fully optimized solution that aligns with your goals and boosts organizational productivity.',
    angle: '-7deg',
    prev: 2,
    next: 4,
  },
  {
    id: 4,
    title: 'Ecommerce & Online Businesses',
    icon: <FaUsers size={60} />,
    description:
      'Launch, manage, and scale your online store with our comprehensive ecommerce development services. We build responsive ecommerce websites, custom marketplaces, and subscription platforms using technologies like Shopify, WooCommerce, and custom React/Node solutions. Features include inventory control, customer dashboards, payment gateways, real-time order tracking, and promotional tools. Our solutions are SEO-ready, mobile-optimized, and designed for conversions, ensuring your online business thrives in a competitive market.',
    angle: '11deg',
    prev: 3,
    next: 5,
  },
  {
    id: 5,
    title: 'Digital Marketing & SEO',
    icon: <FaSearch size={60} />,
    description:
      'Boost your digital presence and drive targeted traffic with our comprehensive marketing strategies. We provide in-depth SEO audits, keyword research, technical optimizations, and on-page/off-page SEO for organic growth. Our PPC experts create data-driven Google Ads and social media campaigns with strong ROI. From branding to email marketing, we ensure your message reaches the right audience at the right time. Plus, you’ll receive detailed performance analytics to monitor success and guide future strategies.',
    angle: '13deg',
    prev: 4,
    next: 1,
  },
];

export default function MyService() {
  return (
    <section className="position-relative bg-black" >
      <div className="position-relative z-1 p-4">
        <h2 className="responsive-heading text-white">Our Services</h2>
        <p className="fs-5 text-white">We offer a wide range of solutions to help your business grow.</p>

        <div className="myservice-cards px-0 shadow-0 border-0 w-full">
          {services.map((service) => (
            <React.Fragment key={service.id}>
              <input
                type="radio"
                id={`radio-${service.id}`}
                name="radio-card"
                defaultChecked={service.id === 1}
              />
              <article
                className="myservice-card shadow-0 px-0 border-0"
                style={{ '--angle': service.angle }}
              >
                <div className="myservice-card-data">
                  <span className="myservice-card-num fs-2 mb-3">{service.id}/5</span>
                  <h2 className="fw-bold fs-2">{service.title}</h2>
                  <p className="fs-5">{service.description}</p>
                  <footer>
                    <label htmlFor={`radio-${service.prev}`} aria-label="Previous">
                      &#10094;
                    </label>
                    <label htmlFor={`radio-${service.next}`} aria-label="Next">
                      &#10095;
                    </label>
                  </footer>
                </div>
                <motion.div
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                  }} className="myservice-card-icon d-none d-md-flex">{service.icon}
                </motion.div>

              </article>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}