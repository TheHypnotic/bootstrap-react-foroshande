import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md py-2">
      <div className="container">
        <a href="/" className="navbar-brand text-info">
          فروشنده
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link "
                id="dropDownDigi"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                کالای دیجیتال
              </a>
              <ul
                className="dropdown-menu text-end"
                aria-labelledby="dropDownDigi"
              >
                <li>
                  <a href="#" className="dropdown-item">
                    موبایل
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    تبلت
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    لپ تاپ
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link"
                id="dropDownPoshaak"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                پوشاک
              </a>
              <ul
                className="dropdown-menu text-end"
                aria-labelledby="dropDownPoshaak"
              >
                <li>
                  <a href="#" className="dropdown-item">
                    مردانه
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    زنانه
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    بچه گانه
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                کتاب
              </a>
            </li>
          </ul>
          <form className="d-flex " id="search-form">
            <input
              type="search"
              className="form-control ms-2"
              placeholder="جستجو"
              aria-label="search"
            />
            <button className="btn btn-outline-info" type="submit">
              جستجو
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
