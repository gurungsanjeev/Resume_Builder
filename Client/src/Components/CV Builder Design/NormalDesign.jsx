import ResumePDF from "../Utils/ResumePDF"; 
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState, useEffect } from "react";

const NormalDesign = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [certification, setCertification] = useState([]);
  const [achievement, setAchievement] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const personal = JSON.parse(localStorage.getItem("personalDetails"));
    const education = JSON.parse(localStorage.getItem("EducationDetails"));
    const experience = JSON.parse(localStorage.getItem("WorkExperiences"));
    const certificationData = JSON.parse(localStorage.getItem("CertificateData"));
    const achievementData = JSON.parse(localStorage.getItem("AchievementData"));
    const skillsData = JSON.parse(localStorage.getItem("SkillsDetails"));
    const projectData = JSON.parse(localStorage.getItem("ProjectData"));

    if (personal) setPersonalInfo(personal);
    if (education) setEducationInfo(education);
    if (experience) setExperienceInfo(experience);
    if (certificationData) setCertification(certificationData);
    if (achievementData) setAchievement(achievementData);
    if (skillsData) setSkills(skillsData);
    if (projectData) setProjects(projectData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-8">
          <PDFDownloadLink
            document={
              <ResumePDF
                personalInfo={personalInfo}
                educationInfo={educationInfo}
                experienceInfo={experienceInfo}
                certification={certification}
                achievement={achievement}
                skills={skills}
                projects={projects}
              />
            }
            fileName={`${personalInfo.fname || "Academic_CV"}_Academic_CV.pdf`}
          >
            {({ loading }) => (
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-200 hover:bg-indigo-700 shadow-lg hover:shadow-xl">
                {loading ? "Preparing Academic CV..." : "Download Academic CV"}
              </button>
            )}
          </PDFDownloadLink>
        </div>

        <div className="flex gap-8 max-w-full">
          {/* Sidebar */}
          <div
            className="w-[28%] min-h-[90vh] rounded-2xl p-8 flex flex-col"
            style={{
              backgroundColor: "#1e293b",
              color: "#f1f5f9",
            }}
          >
            <div className="flex flex-col space-y-8">
              <div>
                <h1 className="text-3xl font-black leading-tight">
                  {personalInfo.fname} {personalInfo.mname} {personalInfo.lname}
                </h1>
                <p className="text-indigo-300 text-sm font-medium mt-2">
                  {personalInfo.title}
                </p>
              </div>

              <div>
                <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4 border-b-2 border-indigo-500 pb-2">
                  Contact Information
                </h2>
                <div className="space-y-3 text-sm">
                  <p>Email: {personalInfo.email}</p>
                  <p>Phone: {personalInfo.phone}</p>
                  <p>Address: {personalInfo.address}</p>
                </div>
              </div>

              {skills.length > 0 && (
                <div>
                  <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4 border-b-2 border-indigo-500 pb-2">
                    Research & Technical Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-indigo-500 text-white text-xs font-medium rounded-full"
                      >
                        {skill.skills}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-[72%]">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {/* Education - Prominent Position */}
              {educationInfo.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-indigo-600 font-bold text-sm uppercase tracking-wider border-b-3 border-indigo-500 pb-3 inline-block mb-6">
                    Education
                  </h2>
                  {educationInfo.map((edu, index) => (
                    <div key={index} className="mb-8">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            {edu.level}
                          </h3>
                          <p className="text-gray-700 text-sm mt-1">{edu.affiliated}</p>
                        </div>
                        <span className="text-sm font-medium text-gray-600 ml-4">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 font-medium">GPA: {edu.gpa}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Research Experience / Academic Experience */}
              {experienceInfo.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-indigo-600 font-bold text-sm uppercase tracking-wider border-b-3 border-indigo-500 pb-3 inline-block mb-6">
                    Research & Academic Experience
                  </h2>
                  {experienceInfo.map((exp, index) => (
                    <div key={index} className="mb-8">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">
                            {exp.position}
                          </h3>
                          <p className="text-gray-700 text-sm mt-1">{exp.institution}</p>
                        </div>
                        <span className="text-sm font-medium text-gray-600 ml-4">
                          {exp.jDate} – {exp.eDate || "Present"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{exp.role}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Research Projects/Thesis Work */}
              {projects.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-indigo-600 font-bold text-sm uppercase tracking-wider border-b-3 border-indigo-500 pb-3 inline-block mb-6">
                    Research Projects
                  </h2>
                  {projects.map((project, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed mt-2">{project.summary}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Awards, Honors, and Scholarships */}
              {(achievement.length > 0 || certification.length > 0) && (
                <div className="mb-10">
                  <h2 className="text-indigo-600 font-bold text-sm uppercase tracking-wider border-b-3 border-indigo-500 pb-3 inline-block mb-6">
                    Awards, Honors & Certifications
                  </h2>
                  {achievement.map((ach, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900">{ach.awardtitle}</h3>
                      <p className="text-xs text-gray-600">{ach.institution} • {ach.awarddate || ach.year}</p>
                    </div>
                  ))}
                  {certification.map((cert, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                      <p className="text-xs text-gray-600">{cert.institution} • {cert.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalDesign;