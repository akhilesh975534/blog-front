import React, { useEffect, useState } from "react";
import profileModel from "../../model/profile.model";

const ProfileEdit = () => {
  const [profile, setProfile] = useState({});

  const userinfo = sessionStorage.getItem("userInfo");
  const user = JSON.parse(userinfo);
  const id = user.id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfile = async () => {
    try {
      await profileModel.getProfile(id).then((res) => {
        if (res) {
          console.log(res);
          setProfile(res?.data?.user);
        }
      });
    } catch (error) {
      console.log(error, "error+++++++++++++++");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    console.log("Updated Profile:", profile);
  };

  useEffect(() => {
    handleProfile();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={profile.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-3">
            <label className="form-label">Mobile No</label>
            <input
              type="tel"
              className="form-control"
              name="mobileNo"
              value={profile.mobileNo}
              onChange={handleChange}
              required
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => alert("Back button clicked")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
