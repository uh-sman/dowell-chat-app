import React from "react";
import ProfileHead from "./ProfileHead";
import ReplyChat from "./ReplyChat";

const Profile = () => {
  return (
    <div
      className="w-100 w-md-100 w-lg-75 w-xl-75 w-xxl-75 mb-5"
      style={{ maxWidth: "300px", background: "red" }}
    >
      <ProfileHead />
      <ReplyChat />
    </div>
  );
};

export default Profile;
