import React from "react";
import Sidebar from "./components/Navbar.jsx";
import UserDropdown from "./layouts/UserDropdown.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";

const Admin = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }} dir="rtl">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Top bar */}
        <nav className="navbar navbar-light bg-light border-bottom justify-content-between px-4">
          <h5 className="m-0 fw-bold">پنل مدیریت</h5>
          <UserDropdown />
        </nav>

        {/* Page Content */}
        <div className="flex-grow-1 p-4">
          <AdminRoutes />
        </div>
      </div>
    </div>
  );
};

export default Admin;
