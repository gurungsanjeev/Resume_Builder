import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })
const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8000/user/signup', form);
    console.log("response", response.data);

    if (response.data.success) {
      // Navigate to login page
      navigate("/login");
    }
  } catch (error) {
    console.log("Error in signup", error);
  }
}

  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <NavLink to="/login" className="text-green-500 hover:underline font-medium">
              &nbsp;Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup;
