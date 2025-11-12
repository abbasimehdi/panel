import React from "react";

const Users = () => {
  // Sample users data
  const users = [
    { id: 1, name: "علی رضایی", email: "ali@example.com", role: "مدیر" },
    { id: 2, name: "سارا محمدی", email: "sara@example.com", role: "کاربر" },
    { id: 3, name: "مهدی حسینی", email: "mehdi@example.com", role: "کاربر" },
  ];

  return (
    <div className="container-fluid" dir="rtl">
      <h2 className="my-4">کاربران</h2>
      <p>در این بخش می‌توانید تمام کاربران ثبت‌نام‌شده را مدیریت کنید.</p>

      <table className="table table-striped table-bordered table-hover text-end">
        <thead className="table-dark">
          <tr>
            <th>ردیف</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>نقش</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">
                  <i className="bi bi-pencil-fill"></i> ویرایش
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="bi bi-trash-fill"></i> حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
