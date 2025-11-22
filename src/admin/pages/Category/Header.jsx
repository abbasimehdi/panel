import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ refreshColors }) => {
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/admin/categories/create');
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
      <div className="mb-3 mb-md-0">
        <h2 className="my-4">دسته‌بندی‌ها</h2>
        <p className="text-muted mb-0">مدیریت و مشاهده تمام دسته‌بندی‌های سیستم</p>
      </div>

      <div className="d-flex flex-wrap gap-2">
        <button 
          className="btn btn-outline-primary d-flex align-items-center"
          onClick={refreshColors}
        >
          <i className="fas fa-palette ms-2"></i>
          تغییر رنگ‌ها
        </button>

        <button 
          className="btn btn-primary d-flex align-items-center"
          onClick={handleAddCategory}
        >
          <i className="fas fa-plus ms-2"></i>
          افزودن دسته‌بندی جدید
        </button>
      </div>
    </div>
  );
};

export default Header;