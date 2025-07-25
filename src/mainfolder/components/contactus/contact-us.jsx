import React from "react";
import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
const ContactUsPage = () => {
  return (
    <> 
          <Banner _data={bannerData.contact} />

    <div className="container-fluid bg-black text-white py-5 px-3">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-5 mb-4">
          <h6 style={{ fontWeight: "bold", color: "#fff" }}>Devsinc</h6>
          <h2 className="fs-2" style={{ fontWeight: "bold", color: "#ff0055" }}>
            Let's discuss your project
          </h2>
          <p>
            We are committed to understanding your requirements and crafting a tailored solution
            that aligns with your goals.
          </p>
          <p>
            Enter your details and someone from our team will reach out to find a time to connect
            with you.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-md-7">
          <form className="text-white">
            <div className="row mb-3">
              <div className="col">
                <label>First Name<span className="text-custom">*</span></label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col">
                <label>Last Name<span className="text-custom">*</span></label>
                <input type="text" className="form-control" required />
              </div>
            </div>

            <div className="mb-3">
              <label>Email<span className="text-custom">*</span></label>
              <input type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label>Phone number<span className="text-custom">*</span></label>
              <div className="d-flex">
                <select className="form-select me-2" style={{ maxWidth: "40%" }}>
                  <option>Pakistan (+92)</option>
                  <option>USA (+1)</option>
                  <option>UK (+44)</option>
                </select>
                <input type="text" className="form-control" placeholder="+92" />
              </div>
            </div>

            <div className="mb-3">
              <label>Budget<span className="text-custom">*</span></label>
              <input type="text" className="form-control" placeholder="Your Budget" />
            </div>

            <div className="mb-3">
              <label>Company name<span className="text-custom">*</span></label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label>Company domain / URL</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label>Region<span className="text-custom">*</span></label>
              <select className="form-select">
                <option>Please Select</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>North America</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Services you're looking for<span className="text-custom">*</span></label>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remote" />
                <label className="form-check-label" htmlFor="remote">Remote IT Resources</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="custom" />
                <label className="form-check-label" htmlFor="custom">Custom Software Development</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="webdev1" />
                <label className="form-check-label" htmlFor="webdev1">Web Development</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="mobile" />
                <label className="form-check-label" htmlFor="mobile">Mobile App Development</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="arvr" />
                <label className="form-check-label" htmlFor="arvr">AR/VR</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="gaming" />
                <label className="form-check-label" htmlFor="gaming">Gaming</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="cyber" />
                <label className="form-check-label" htmlFor="cyber">Cyber Security</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="other" />
                <label className="form-check-label" htmlFor="other">Other IT Services</label>
              </div>
            </div>

            <div className="mb-3">
              <label>Project Details<span className="text-custom">*</span></label>
              <textarea className="form-control" rows="3" required></textarea>
            </div>

            <div className="mb-3">
              <label>I am looking for a job at Devsinc</label>
              <select className="form-select">
                <option>Please Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="mb-3">
              {/* reCAPTCHA placeholder */}
              <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "5px", width: "300px" }}>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" width="30" className="me-2" />
                <span style={{ fontSize: "12px", color: "black" }}>protected by reCAPTCHA</span>
              </div>
            </div>

            <button type="submit" className="btn btn-danger mt-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUsPage;
