import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onLoginSubmitted = (data) => {
    handleUserLogging(data);
  };
  return (
    <div className="mt-[50px]">
      <form
        action=""
        className="bg-purple-900 mx-auto w-full max-w-[600px] p-[32px] rounded-2xl text-start"
      >
        <h1 className="text-[55px] font-bold text-[#FFFFFF]">Login</h1>
        <div className="mt-[40px] flex flex-col gap-[24px] ">
          <div>
            <input
              type="username"
              placeholder="User Name"
              className="relative w-full pt-1 px-4 pb-5 bg-[#27244c] border-b-3 
               border-b-[#5a698f] cursor-pointer outline-none text-[#FFFFFF] text-[16px]
                font-semibold focus:border-b-[#FFFFFF] caret-[#5f57a1]
                placeholder:text-[#SF57A1] placeholder:text-[16px] placeholder:font-semibold "
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="relative w-full pt-1 px-4 pb-5 bg-[#27244c] border-b-3 
               border-b-[#5a698f] cursor-pointer outline-none text-[#FFFFFF] text-[16px]
                font-semibold focus:border-b-[#FFFFFF] caret-[#5f57a1]
                placeholder:text-[#SF57A1] placeholder:text-[16px] placeholder:font-semibold"
            />
          </div>
          <div className=" flex justify-center rounded-[6px]">
            <Link
              to="/"
              className=" text-[#FFFFFF] font-bold text-[15px]
           py-[15px] rounded-[6px] hover:bg-[#ffffff] hover:text-[#10141e]"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="mt-[24px] flex justify-center gap-2">
          <p className="text-[14px] font-normal text-[#ffffff] ">
            Don't have an account?
          </p>
          <Link
            to="/Regeister"
            className="text-[#5f57a1] text-[14px] font-bold cursor-pointer underline"
          >
            Open New Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
