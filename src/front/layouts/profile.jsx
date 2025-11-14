import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import apiClient from "../../api/apiClient.jsx";
import jalaali from "jalaali-js";
import Menu from "../../front/layouts/Menu.jsx";
import Footer from "../../front/layouts/Footer.jsx";
import "../../assets/css/front.css"; // Global styles
import "../../assets/css/profile.css"; // Local profile styles

const Profile = () => {
  const { token, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Convert ISO date to Persian (Jalaali)
  const toPersianDate = (isoDate) => {
    if (!isoDate) return "تاریخ نامشخص";
    const date = new Date(isoDate);
    const jDate = jalaali.toJalaali(date);
    return `${jDate.jy}/${jDate.jm.toString().padStart(2, "0")}/${jDate.jd
      .toString()
      .padStart(2, "0")}`;
  };

  // Fetch profile data
  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (err) {
        console.error(err);
        setError("خطا در بارگذاری پروفایل");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  // Unauthenticated
  if (!token) {
    return (
      <div className="profile-wrapper">
        <Menu />
        <div className="profile-content text-center">
          <h3>ابتدا وارد حساب کاربری شوید.</h3>
        </div>
        <Footer />
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div className="profile-wrapper">
        <Menu />
        <div className="profile-content text-center">
          <p>در حال بارگذاری پروفایل...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="profile-wrapper">
        <Menu />
        <div className="profile-content text-center text-danger">
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Main profile content
  return (
    <div className="profile-wrapper">
      <Menu />
      <div className="profile-content">
        <div className="profile-card">
          <h3>پروفایل کاربری</h3>

          <div className="profile-row">
            <div>🆔 شناسه کاربر:</div>
            <div>{profile.id}</div>
          </div>

          <div className="profile-row">
            <div>👤 نام:</div>
            <div>{profile.name}</div>
          </div>

          <div className="profile-row">
            <div>📧 ایمیل:</div>
            <div>{profile.email}</div>
          </div>

          <div className="profile-row">
            <div>✅ تایید ایمیل:</div>
            <div>{profile.email_verified_at || "تایید نشده"}</div>
          </div>

          <div className="profile-row">
            <div>📅 تاریخ ایجاد حساب:</div>
            <div>{toPersianDate(profile.created_at)}</div>
          </div>

          <div className="profile-row">
            <div>🔄 آخرین بروزرسانی:</div>
            <div>{toPersianDate(profile.updated_at)}</div>
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={logout}>
              خروج از حساب
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
