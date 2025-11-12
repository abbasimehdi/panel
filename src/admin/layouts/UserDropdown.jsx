import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const UserDropdown = () => {
  return (
    <div className="dropdown position-relative">
      <a
        className="d-flex align-items-center text-decoration-none dropdown-toggle"
        href="#"
        id="userDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* ✅ Bootstrap Icon Avatar */}
        <div className="position-relative ms-2">
          <i
            className="bi bi-person-circle fs-3 text-secondary"
            style={{ width: "40px", height: "40px" }}
          ></i>

          {/* Status Dot */}
          <span
            className="position-absolute translate-middle p-2 bg-success border border-light rounded-circle"
            style={{
              top: "2px",
              left: "28px",
              width: "10px",
              height: "10px",
            }}
          ></span>
        </div>

        {/* Username */}
        <span className="fw-bold text-dark">ادمین</span>
      </a>

      {/* ✅ RTL aligned dropdown */}
      <ul
        className="dropdown-menu dropdown-menu-start shadow text-end"
        aria-labelledby="userDropdown"
      >
        <li>
          <h6 className="dropdown-header">وضعیت</h6>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <span className="badge bg-success ms-2">●</span> آنلاین
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <span className="badge bg-warning ms-2">●</span> در انتظار
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <span className="badge bg-secondary ms-2">●</span> آفلاین
          </a>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">پروفایل</a></li>
        <li><a className="dropdown-item text-danger" href="#">خروج</a></li>
      </ul>
    </div>
  );
};

export default UserDropdown;
