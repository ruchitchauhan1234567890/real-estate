import React from "react";
import LoginForm from "../component/Auth/Login/LoginForm";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Full Screen Background Image */}
      <img
        src="https://img.magnific.com/free-photo/observation-ur…ss-steel_1127-2397.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Real Estate"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Login content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">

        <LoginForm />

      </div>

    </div>
  );
};

export default Login;