


import ResumePDF from "../Utils/ResumePDF"; 
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState, useEffect } from "react";

const Design = () => {
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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
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
        fileName={`${personalInfo.fname || "Resume"}_Resume.pdf`}
      >
        {({ loading }) => (
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            {loading ? "Preparing PDF..." : "Download PDF"}
          </button>
        )}
      </PDFDownloadLink>
        </div>

        <div className="flex  max-w-full">
          {/* Sidebar */}
          <div
            className="w-[20%] min-h-[90vh]  p-8 flex flex-col"
            style={{
              backgroundColor: "#0f172a",
              color: "#f1f5f9",
            }}
          >
            <div className="flex flex-col  space-y-6">
              <div>
                <h1 className="text-3xl font-black leading-tight">
                  {personalInfo.fname} {personalInfo.mname} {personalInfo.lname}
                </h1>
                <p className="text-cyan-300 text-sm font-medium mt-2">
                  {personalInfo.title}
                </p>
              </div>

              <div>
                <h2 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 border-b-2 border-cyan-500 pb-2">
                  Contact
                </h2>
                <div className="space-y-3 text-sm">
                  <p>Email: {personalInfo.email}</p>
                  <p>Phone: {personalInfo.phone}</p>
                  <p>Address: {personalInfo.address}</p>
                </div>
              </div>

              {skills.length > 0 && (
                <div>
                  <h2 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 border-b-2 border-cyan-500 pb-2">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-cyan-500 text-white text-xs font-medium rounded-full"
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
          <div className="w-[40%]">
            <div className="bg-white  p-8 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-wider border-b-2 border-cyan-500 pb-2 inline-block">
                  Professional Summary
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {personalInfo.summary}
                </p>
              </div>

              {experienceInfo.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-wider border-b-2 border-cyan-500 pb-2 inline-block">
                    Experience
                  </h2>
                  {experienceInfo.map((exp, index) => (
                    <div key={index} className="mb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {exp.position} – {exp.institution}
                        </h3>
                        <span className="text-sm font-medium text-gray-600">
                          {exp.jDate} – {exp.eDate || "Present"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{exp.role}</p>
                    </div>
                  ))}
                </div>
              )}

              {educationInfo.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-wider border-b-2 border-cyan-500 pb-2 inline-block">
                    Education
                  </h2>
                  {educationInfo.map((edu, index) => (
                    <div key={index} className="mb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-900">
                          {edu.level} – {edu.affiliated}
                        </h3>
                        <span className="text-sm font-medium text-gray-600">{edu.year}</span>
                      </div>
                      <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>
                    </div>
                  ))}
                </div>
              )}

              {projects.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-wider border-b-2 border-cyan-500 pb-2 inline-block">
                    Projects
                  </h2>
                  {projects.map((project, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed mt-2">{project.summary}</p>
                    </div>
                  ))}
                </div>
              )}

              {(certification.length > 0 || achievement.length > 0) && (
                <div className="mb-8">
                  <h2 className="text-cyan-600 font-bold text-sm uppercase tracking-wider border-b-2 border-cyan-500 pb-2 inline-block">
                    Certifications & Achievements
                  </h2>
                  {certification.map((cert, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900">{cert.title}</h3>
                      <p className="text-xs text-gray-600">{cert.institution} – {cert.date}</p>
                    </div>
                  ))}
                  {achievement.map((ach, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900">{ach.awardtitle}</h3>
                      <p className="text-xs text-gray-600">{ach.institution} – {ach.awarddate || ach.year}</p>
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

export default Design;