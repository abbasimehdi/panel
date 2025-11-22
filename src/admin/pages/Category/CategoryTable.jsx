// CategoryTable.jsx

import React from "react";
import { renderCategoryIcon } from "./utils";

const CategoryTable = ({ categories, pagination }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          <i className="fas fa-table me-2"></i>
          لیست دسته‌بندی‌ها
        </h5>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm">
            <i className="fas fa-download me-1"></i> خروجی
          </button>

          <button className="btn btn-outline-light btn-sm">
            <i className="fas fa-filter me-1"></i> فیلتر
          </button>
        </div>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover text-end">
            <thead className="table-dark">
              <tr>
                <th>ردیف</th>
                <th>آیکون</th>
                <th>نام</th>
                <th>والد</th>
                <th>تاریخ ایجاد</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <td>{(pagination.current_page - 1) * pagination.per_page + index + 1}</td>

                  <td className="text-center">{renderCategoryIcon(category)}</td>

                  <td>
                    <strong>{category.name}</strong>

                    {category.children_recursive?.length > 0 && (
                      <span className="badge bg-info me-2">
                        {category.children_recursive.length} زیردسته
                      </span>
                    )}
                  </td>

                  <td>
                    {category.parent_id ? (
                      <span className="badge bg-secondary">زیردسته</span>
                    ) : (
                      <span className="badge bg-primary">اصلی</span>
                    )}
                  </td>

                  <td>{new Date(category.created_at).toLocaleDateString("fa-IR")}</td>

                  <td><span className="badge bg-success">فعال</span></td>

                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-warning btn-sm">
                        <i className="fas fa-edit me-1"></i> ویرایش
                      </button>

                      <button className="btn btn-danger btn-sm">
                        <i className="fas fa-trash me-1"></i> حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pagination.last_page > 1 && <></>}
      </div>
    </div>
  );
};

export default CategoryTable;
