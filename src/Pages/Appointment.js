import React from "react";

function Appointment() {
  return (
    <>
      <div className="page-banner-area bg-img-3 pt-95 pb-90">
        <div className="container">
          <div className="row">
            <div className="page-banner-content col-12 text-center">
              <h2>Make an Appointment</h2>
              <p>
                Adalot is the best Law Firm. We solve your problems tempora
                incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                Ut enim ad minima veniam
              </p>
              <ul className="breadcrumb-pagination">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Pages</li>
                <li>Appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="make-an-appoinment-area pt-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-12 offset-0">
              <div className="page-appointment">
                <div className="page-appointment-title">
                  <h2>Make an Appointment</h2>
                </div>
                <div className="page-appointment-box">
                  <form
                    id="contact-form"
                    action="appointment.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-input">
                          <input
                            name="user-first-name"
                            id="user-first-name"
                            placeholder="First Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input
                            name="user-last-name"
                            id="user-last-name"
                            placeholder="Last Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input
                            name="user-phone"
                            id="user-phone"
                            placeholder="Phone"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input
                            name="user-email"
                            id="user-email"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input
                            name="user-subject"
                            id="user-subject"
                            placeholder="Subject"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input">
                          <input
                            name="user-select-date"
                            id="user-select-date"
                            data-select="datepicker"
                            placeholder="Select Date"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input">
                          <textarea
                            name="user-message"
                            cols="30"
                            rows="5"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-input button">
                          <button type="submit" className="default-btn">
                            Send Now{" "}
                            <i className="icofont icofont-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-area pt-90 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="brand-active owl-carousel">
                <div className="single-brand">
                  <a href="/">
                    <img src="assets/img/brand/brand1.jpg" alt="" />
                  </a>
                </div>

                <div className="single-brand">
                  <a href="/">
                    <img src="assets/img/brand/brand2.jpg" alt="" />
                  </a>
                </div>

                <div className="single-brand">
                  <a href="/">
                    <img src="assets/img/brand/brand3.jpg" alt="" />
                  </a>
                </div>

                <div className="single-brand">
                  <a href="/">
                    <img src="assets/img/brand/brand4.jpg" alt="" />
                  </a>
                </div>

                <div className="single-brand">
                  <a href="/">
                    <img src="assets/img/brand/brand5.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
