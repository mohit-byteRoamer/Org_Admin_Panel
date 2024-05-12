import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import SignIn from "../../screen/auth/sign-in";
import SignUp from "../../screen/auth/sign-up";
import VerifyOTP from "../../screen/auth/verify-otp";
import Registration from "../../screen/auth/registration";

const AuthLayout = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="container w-full overflow-hidden h-full">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/verifyOTP" element={<VerifyOTP />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Layout>
  );
};
export default AuthLayout;
