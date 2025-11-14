import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import apiClient from "../../api/apiClient.jsx";

const Profile = () => {
  const { user, token } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  // Fetch profile from backend if available
  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const response = await apiClient.get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfile(response.data);
      } catch (error) {
        console.error("Cannot load profile:", error);
      }
    };

    fetchProfile();
  }, [token]);

  if (!token) {
    return (
      <div className="container mt-5 text-center">
        <h3>ابتدا وارد حساب کاربری شوید.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5" dir="rtl">
      <div className="card shadow p-4" style={{ maxWidth: "500px", margin: "auto" }}>
        <h3 className="text-center mb-4">پروفایل کاربری</h3>

        <div>
          <p><strong>شناسه کاربر:</strong> {user?.id}</p>

          {profile ? (
            <>
              {profile.name && <p><strong>نام:</strong> {profile.name}</p>}
              {profile.email && <p><strong>ایمیل:</strong> {profile.email}</p>}
              {profile.phone && <p><strong>تلفن:</strong> {profile.phone}</p>}
            </>
          ) : (
            <p className="text-muted">در حال بارگذاری اطلاعات...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
