
// src/admin/AdminRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard.jsx";
import Users from "../pages/Users.jsx";
import Category from "../pages/Category/index.jsx";
import CategoryCreate from "../pages/Category/Create.jsx";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="categories" element={<Category />} />
      <Route path="categories/create" element={<CategoryCreate />} />
      <Route path="*" element={<h2>صفحه پیدا نشد</h2>} />
    </Routes>
  );
};

export default AdminRoutes;
