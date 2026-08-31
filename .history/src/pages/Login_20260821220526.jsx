import React from "react";
import LoginForm from "../component/Auth/Login/LoginForm";


const Login = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Top Header */}
      

        {/* Login Section */}
        <div className="bg-[#72d8f2] p-6 md:p-10">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Login Form */}
            <div>
              <LoginForm />
            </div>

            {/* Building Image */}
            <div className="hidden md:flex justify-center items-center">
              <img
                src="/images/building.png"
                alt="Real Estate"
                className="w-full max-w-lg object-contain"
              />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;