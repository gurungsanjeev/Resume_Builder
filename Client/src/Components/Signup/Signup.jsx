


import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const primaryHex = "#136dec";
const bgLightHex = "#f6f7f8";
const bgDarkHex = "#101822";

const materialSymbolsStyle = {
  fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
  fontSize: "24px",
};

const FileIcon = (props) => (
  <svg
    className={props.className || "h-6 w-6 text-primary"}
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M10 9H8"></path>
    <path d="M16 13H8"></path>
    <path d="M16 17H8"></path>
  </svg>
);

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/signup", form);
      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error in signup", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <div
      className={`relative flex min-h-screen w-full flex-col bg-[${bgLightHex}] dark:bg-[${bgDarkHex}] group/design-root overflow-x-hidden font-display`}
    >
      <header className="flex h-20 shrink-0 items-center px-4 md:px-6 lg:px-8">
        <a
          className="flex items-center gap-2 text-lg font-semibold text-[#111418] dark:text-white"
          href="#"
        >
          <FileIcon className={`h-6 w-6 text-[${primaryHex}]`} />
          <span className="font-bold">CV Maker</span>
        </a>
      </header>

      {/* ✅ Only one form wrapping the entire right column */}
      <form onSubmit={handleSubmit}>
        <main className="flex-1">
          <div className="flex h-full w-full items-center justify-center">
            <div
              className={`grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl bg-white dark:bg-[${bgDarkHex}] shadow-md md:grid-cols-2`}
            >
              {/* Left Column */}
              <div className="relative hidden h-full flex-col justify-between bg-zinc-900 p-10 md:flex">
                <div className="absolute inset-0 z-0">
                  <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlCYHRaLzrZPgO37AssBe_yJPtNN4k9HpQPYezDsu-mBVJbArQHyvQWXzMViFFJRwaYVEiiEa33R6cTXH22-UJyGCYqvVMiFBGuvDbhFMpjLFbV3xpWHQE49vvXux0wfXPv3oKhcxX-X-_rdOSUUQwzhgdhT-BA2QhEIoF-buJvS78gZsex5fqo5BRa5cAXcqZ5iCa7DhjIJxeR8-VdGC2E8MH3rSHYyfybuYCaTjCuyweA-FhD-JmDUbeSh5FRd2n9l70veAlO9OI")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-lg font-medium text-white">
                  <FileIcon className="h-6 w-6 text-white" />
                  <span className="font-bold">CV Maker</span>
                </div>
                <div className="relative z-10 mt-auto text-white">
                  <p className="text-3xl font-bold">Build Your Professional Future.</p>
                  <p className="mt-2 text-base text-zinc-300">
                    Create a standout CV in minutes and land your dream job.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-6 sm:p-10">
                <div className="flex w-full max-w-sm flex-col items-start gap-5">
                  <div className="w-full">
                    <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                      Create Your Account
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400 mt-2">
                      Let's get you started.
                    </p>
                  </div>

                  <div className="w-full space-y-4">
                    {/* Full Name */}
                    <label className="flex flex-col w-full flex-1">
                      <p className="text-[#111418] dark:text-gray-300 text-base font-medium leading-normal pb-2">
                        Full Name
                      </p>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Enter your full name"
                        className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-0 focus:ring-2 focus:ring-[${primaryHex}]/50 border border-[#dbe0e6] bg-white focus:border-[${primaryHex}] h-14 placeholder:text-[#617289] p-[15px] text-base font-normal leading-normal`}
                      />
                    </label>

                    {/* Email */}
                    <label className="flex flex-col w-full flex-1">
                      <p className="text-[#111418] dark:text-gray-300 text-base font-medium leading-normal pb-2">
                        Email Address
                      </p>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Enter your email address"
                        className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-0 focus:ring-2 focus:ring-[${primaryHex}]/50 border border-[#dbe0e6] bg-white focus:border-[${primaryHex}] h-14 placeholder:text-[#617289] p-[15px] text-base font-normal leading-normal`}
                      />
                    </label>

                    {/* Password */}
                    <label className="flex flex-col w-full flex-1">
                      <p className="text-[#111418] dark:text-gray-300 text-base font-medium leading-normal pb-2">
                        Password
                      </p>
                      <div className="relative flex w-full flex-1 items-stretch">
                        <input
                          type={passwordType}
                          value={form.password}
                          onChange={(e) => setForm({ ...form, password: e.target.value })}
                          placeholder="Enter your password"
                          className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-0 focus:ring-2 focus:ring-[${primaryHex}]/50 border border-[#dbe0e6] bg-white focus:border-[${primaryHex}] h-14 placeholder:text-[#617289] p-[15px] pr-12 text-base font-normal leading-normal`}
                        />
                        <button
                          type="button"
                          className="text-[#617289] dark:text-gray-400 absolute right-0 top-0 flex h-full items-center justify-center px-4"
                          
                        >
                          
                        </button>
                      </div>
                    </label>

                    {/* Sign Up Button */}
                    <button
                      type="submit"
                      className="bg-blue-500 w-full p-3 font-semibold text-white rounded-2xl"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="w-full space-y-2 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      By signing up, you agree to our{" "}
                      <a className={`text-blue-600 font-medium text-[${primaryHex}] hover:underline`} href="#">
                        Terms of Service
                      </a>
                      .
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <NavLink to="/login">
                        <span className="text-blue-500 font-semibold">Log In</span>
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
};

export default SignUp;
