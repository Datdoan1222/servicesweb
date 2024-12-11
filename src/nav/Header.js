import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ul className="top-label">
                <li>
                  <i className="fa fa-map-marker"> </i> Thơi gian làm việc: (T2
                  - CN hàng tuần) 24/7
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <ul className="top-contact">
                <li className="input-search">
                  <input />
                  <i className="fa fa-search fa-lg"></i>
                </li>
                <li>
                  <i className="fa fa-facebook fa-lg"></i>
                  <a href="#">Facebook.com</a>
                </li>
                <li>
                  <i className="fa fa-youtube-play fa-red fa-lg"></i>
                  <a href="#">youtube.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-12">
                {/* <!-- Start Logo --> */}
                <div className="logo">
                  <a href="index.html">
                    <img
                      src="https://vanchuyenoto.vn/wp-content/uploads/2022/06/logo-phu-son-3.png"
                      alt="#"
                    />
                  </a>
                </div>
                {/* <!-- End Logo --> */}
                {/* <!-- Mobile Nav --> */}
                <div className="mobile-nav"></div>
                {/* <!-- End Mobile Nav --> */}
              </div>
              <div className="col-lg-6 col-md-9 col-12">
                {/* <!-- Main Menu --> */}
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Trang chủ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/about"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Giới thiệu
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Dịch vụ <i class="icofont-rounded-down"></i>
                        </NavLink>
                        <ul className="dropdown">
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                     
                      <li>
                        <NavLink
                          to="/operation"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Đối tác
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Blog <i class="icofont-rounded-down"></i>
                        </NavLink>
                        <ul className="dropdown">
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                        >
                          Liên hệ
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!--/ End Main Menu --> */}
              </div>
              <div className="col-lg-2 col-12 ">
                <div className="get-quote">
                  <a href="appointment.html" className="btn">
                    Liên hệ Zalo{" "}
                    <i aria-hidden="true" className="fa fa-comment-o fa-lg"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-1 col-12 ">
                <div className="get-quote">
                  <a href="tel:+841234567890" className="btn background-red">
                    Gọi tư vấn <i className="fa fa-phone fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
