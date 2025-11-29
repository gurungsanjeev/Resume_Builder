

// export default Login;4
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const primaryHex = "#137fec";
const bgLightHex = "#f6f7f8";
const bgDarkHex = "#101922";

const materialSymbolsStyle = {
  fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
};

const Login = () => {
   const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please enter your email and password");
      return;
    }

    try {
      const result = await axios.post("http://localhost:8000/user/login", form);
      console.log(result.data);

      if (result.data.success) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/home");
      } else {
        alert(result.data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      alert("Invalid input credentials");
    }
  };

  return (
    <div
      className={`relative flex h-auto min-h-screen w-full flex-col bg-[${bgLightHex}] dark:bg-[${bgDarkHex}] group/design-root overflow-x-hidden font-display`}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center items-center">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1">
            <main className="flex min-h-screen w-full flex-col items-center justify-center">
              <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl shadow-lg bg-white dark:bg-slate-900/50">
                {/* Left Column */}
                <div
                  className="flex flex-col justify-center gap-6 p-10 lg:p-12 bg-blue-700 dark:bg-slate-900 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlCYHRaLzrZPgO37AssBe_yJPtNN4k9HpQPYezDsu-mBVJbArQHyvQWXzMViFFJRwaYVEiiEa33R6cTXH22-UJyGCYqvVMiFBGuvDbhFMpjLFbV3xpWHQE49vvXux0wfXPv3oKhcxX-X-_rdOSUUQwzhgdhT-BA2QhEIoF-buJvS78gZsex5fqo5BRa5cAXcqZ5iCa7DhjIJxeR8-VdGC2E8MH3rSHYyfybuYCaTjCuyweA-FhD-JmDUbeSh5FRd2n9l70veAlO9OI")',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`material-symbols-outlined text-[${primaryHex}] text-4xl`}
                      style={materialSymbolsStyle}
                    >
                      description
                    </span>
                    <span className="text-white font-bold text-slate-800 dark:text-white">
                      ResumeCraft
                    </span>
                  </div>
                  <div>
                    <p className="text-white dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                      Welcome Back
                    </p>
                    <p className="text-white dark:text-slate-400 text-base font-normal leading-normal mt-3">
                      Craft your professional story.
                    </p>
                  </div>
                  <div className="w-full h-px bg-slate-200 dark:bg-slate-700 my-4"></div>
                  <p className="text-white dark:text-slate-300 text-sm">
                    Your career journey starts here. Log in to continue managing
                    your professional profile and creating standout resumes.
                  </p>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center p-10 lg:p-12">
                  <div className="w-full">
                    <h1 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-left pb-6">
                      Log In
                    </h1>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={form.password}
                          onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                          placeholder="Enter your password"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
