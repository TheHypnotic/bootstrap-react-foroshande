import React from "react";
import showcase2 from "../static/showcase2.png";
import showcase1 from "../static/showcase1.png";
import showcase3 from "../static/showcase3.png";
import card1 from "../static/card11.png";
import card2 from "../static/card12.png";
import card3 from "../static/card13.png";
import card21 from "../static/card21.png";

import phone from "../static/phone1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <>
      {/* showcase */}
      <section className="showcase h-100">
        <div
          id="showcase-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* carousel indicators */}
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#showcase-carousel"
              data-bs-slide-to="0"
              class=""
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#showcase-carousel"
              data-bs-slide-to="1"
              class="active"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#showcase-carousel"
              data-bs-slide-to="2"
              class=""
              aria-label="Slide 3"
            ></button>
          </div>
          {/* carousel inner */}
          <div className="carousel-inner">
            <div className="carousel-item  ">
              <img
                src={showcase1}
                alt="showcase"
                className="d-block w-100 carousel-image"
              />
              <div className="carousel-caption  d-block mb-5">
                <h5 className="text-light fs-1 bg-secondary d-inline py-2 px-5 bg-opacity-75">
                  کالای اصل با ضمانت
                </h5>
              </div>
            </div>
            <div className="carousel-item active ">
              <img
                src={showcase2}
                alt="showcase"
                className="d-block w-100 carousel-image"
              />
              <div className="carousel-caption  d-block">
                <h5 className="text-light fs-1 bg-secondary d-inline py-2 px-5 bg-opacity-75">
                  ارزان ترین قیمت
                </h5>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                src={showcase3}
                alt="showcase"
                className="d-block w-100 carousel-image"
              />
              <div className="carousel-caption  d-block ">
                <h5 className="text-light fs-1 bg-secondary d-inline py-2 px-5 bg-opacity-75">
                  ارسال سریع و رایگان
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* major categories of the products */}
      <section className="categories bg-primary">
        <div className=" container d-md-flex justify-content-between align-items-center py-5 ">
          <div className="card mx-auto mb-2" style={{ width: "18rem" }}>
            <img
              src={card1}
              alt="showcase"
              className="card-img-top "
              style={{ height: "160px" }}
            />
            <div className="card-body text-center">
              <p>بروزترین تکنولوژی ها</p>
              <a href="#" className="btn btn-primary">
                بیشتر..
              </a>
            </div>
          </div>
          <div className="card mx-auto mb-2" style={{ width: "18rem" }}>
            <img
              src={card2}
              alt="showcase"
              className="card-img-top"
              style={{ height: "160px" }}
            />
            <div className="card-body text-center">
              <p>خرید کتاب</p>
              <a href="#" className="btn btn-primary">
                بیشتر..
              </a>
            </div>
          </div>
          <div className="card mx-auto mb-2" style={{ width: "18rem" }}>
            <img
              src={card3}
              alt="showcase"
              className="card-img-top"
              style={{ height: "160px" }}
            />
            <div className="card-body text-center">
              <p>پوشاک</p>
              <a href="#" className="btn btn-primary">
                بیشتر..
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* promotion of the site */}
      <section id="info">
        <div className="container py-4 d-lg-flex justify-content-between ">
          <div className="w-50 my-auto text-center text-lg-end mx-lg-0 mx-auto mt-5">
            <h2>
              فروشگاه اینترنتی <span className="text-info ">فروشنده</span>
            </h2>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
          <img src={phone} className="w-25 d-lg-block d-none" alt=" " />
        </div>

        {/* multi item carousel */}
        <section className=" py-5">
          <div
            id="multi-item"
            className="carousel  slide container"
            data-bs-ride="carousel"
          >
            {/* indicators */}
            <div class="controls-top">
              <a
                type="button"
                class="carousel-control-next btn-floating"
                data-bs-target="#multi-item"
                data-bs-slide="next"
              >
                <FontAwesomeIcon
                  className="fa-2xl text-md-secondary text-primary"
                  icon={faCircleChevronRight}
                />
              </a>
              <a
                type="button"
                class="carousel-control-prev btn-floating "
                data-bs-target="#multi-item"
                data-bs-slide="prev"
              >
                <FontAwesomeIcon
                  className="fa-2xl text-md-secondary text-primary"
                  icon={faCircleChevronLeft}
                />
              </a>
            </div>

            {/* carousel inner */}
            <div className="carousel-inner " role="listbox">
              {/* first slide */}

              <div className="carousel-item ">
                <div className="row">
                  <div className="col-lg-3 " style={{ float: "right" }}>
                    <div
                      className="card mx-auto  mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card21}
                        alt="showcase"
                        className="card-img-top "
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>بروزترین تکنولوژی ها</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card21}
                        alt="showcase"
                        className="card-img-top "
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>بروزترین تکنولوژی ها</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card21}
                        alt="showcase"
                        className="card-img-top "
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>بروزترین تکنولوژی ها</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card21}
                        alt="showcase"
                        className="card-img-top "
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>بروزترین تکنولوژی ها</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* second slide */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-3 " style={{ float: "right" }}>
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card2}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>خرید کتاب</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card2}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>خرید کتاب</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card2}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>خرید کتاب</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card2}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>خرید کتاب</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* third slide */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-3 " style={{ float: "right" }}>
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card3}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>پوشاک</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card3}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>پوشاک</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card3}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>پوشاک</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 clearfix d-none d-lg-block"
                    style={{ float: "right" }}
                  >
                    <div
                      className="card mx-auto mb-2"
                      style={{ width: "15rem" }}
                    >
                      <img
                        src={card3}
                        alt="showcase"
                        className="card-img-top"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body text-center">
                        <p>پوشاک</p>
                        <a href="#" className="btn btn-primary">
                          بیشتر..
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* contact us form*/}
        <section className="container py-4">
          <form className=" mx-auto w-75 d-flex flex-column">
            <h2 className="mb-3">ارتباط با ما</h2>
            <div className="mb-3    ">
              <label className="form-label" for="email-input">
                نام:
              </label>
              <input type="text" className="form-control " />
            </div>
            <div className="mb-3  ">
              <label className="form-label" for="email-input ">
                ایمیل:
              </label>
              <input type="text" className="form-control " />
            </div>
            <div className="mb-3  form-group">
              <label className="form-label" for="formControlTextarea">
                پیام:
              </label>
              <textarea
                type="text"
                className="form-control "
                id="formControlTextarea"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-3 form-check mx-auto">
              <input
                type="checkbox"
                className="form-check-input"
                id="form-check-box"
              />
              <label for="form-check-box" className="form-check-label">
                قوانین را بطور کامل قبول دارم
              </label>
            </div>
            <button className="btn btn-primary">ارسال</button>
          </form>
        </section>

        {/* foorter */}
        <footer className="navbar-dark bg-dark ">
          <div className="d-flex flex-md-row flex-column container justify-content-between py-2 align-items-center">
            <h2 className="text-info my-auto py-2 ">فروشنده</h2>
            <h3 className="text-light my-auto py-2">
              <a
                href="https://github.com/TheHypnotic/bootstrap-react-foroshande.git"
                className="ms-2 text-light text-decoration-none"
                target="_blank"
              >
                گیت هاب
              </a>
              <FontAwesomeIcon className="git-hub-icon" icon={faGithub} />
            </h3>
            <p className="text-light my-auto py-2 ">ساخت 1401</p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Home;
