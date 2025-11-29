
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-indigo-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-white">
          <Link to="/home">Resume Builder</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-white hover:to-blue-100 font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
