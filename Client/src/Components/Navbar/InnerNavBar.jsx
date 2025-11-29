import { Navigate, useNavigate } from "react-router-dom";

const InnerNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("personalDetails");
    localStorage.removeItem("WorkExperiences");
    localStorage.removeItem("SkillsDetails");
    localStorage.removeItem("ProjectData");
    localStorage.removeItem("EducationDetails");
    localStorage.removeItem("CertificateData");
    localStorage.removeItem("AchievementData");

    navigate("/login");
  };

  /// fetch isAuthenticated from the local storage
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  // console.log("Authenticated:", isAuthenticated);

  return (
    <>
      <nav className="bg-indigo-500">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo section */}
          <div className="logo">
            <h1 className="text-white text-2xl font-bold"> Resume Builder</h1>
          </div>
          {/* //// it check if the isAuthenicated value is true or not */}
          {isAuthenticated ? (
            <div className="profile-section flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="text-white font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default InnerNavBar;
