import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF2 from "../Utils/ResumePDF2";

const NormalDesign = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [certification, setCertification] = useState([]);
  const [achievement, setAchievement] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setPersonalInfo(JSON.parse(localStorage.getItem("personalDetails")) || {});
    setEducationInfo(JSON.parse(localStorage.getItem("EducationDetails")) || []);
    setExperienceInfo(JSON.parse(localStorage.getItem("WorkExperiences")) || []);
    setCertification(JSON.parse(localStorage.getItem("CertificateData")) || []);
    setAchievement(JSON.parse(localStorage.getItem("AchievementData")) || []);
    setSkills(JSON.parse(localStorage.getItem("SkillsDetails")) || []);
    setProjects(JSON.parse(localStorage.getItem("ProjectData")) || []);
  }, []);

  // Combine all data into one form object for ResumePDF2
  const form = {
    fullName: `${personalInfo.fname || ""} ${personalInfo.mname || ""} ${personalInfo.lname || ""}`,
    email: personalInfo.email || "",
    phone: personalInfo.phone || "",
    address: personalInfo.address || "",
    summary: personalInfo.summary || "",
    skills: skills.map((s) => s.skills),
    education: educationInfo.map((e) => ({
      degree: e.level,
      institution: e.affiliated,
      year: e.year,
    })),
    experience: experienceInfo.map((exp) => ({
      jobTitle: exp.position,
      company: exp.institution,
      duration: `${exp.jDate} - ${exp.eDate || "Present"}`,
      description: exp.role,
    })),
    projects: projects.map((p) => ({
      projectName: p.title,
      projectDesc: p.summary,
    })),
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 text-white p-8">
          <h1 className="text-4xl font-bold">
            {personalInfo.fname} {personalInfo.mname} {personalInfo.lname}
          </h1>
          <p className="text-lg mt-2 opacity-80">{personalInfo.title}</p>
        </div>

        <div className="p-8 grid grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                Contact
              </h2>
              <p className="text-gray-700">📧 {personalInfo.email}</p>
              <p className="text-gray-700">📞 {personalInfo.phone}</p>
              <p className="text-gray-700">📍 {personalInfo.address}</p>
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                  Skills
                </h2>
                <ul className="list-disc ml-4 text-gray-700 space-y-1">
                  {skills.map((s, i) => (
                    <li key={i}>{s.skills}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Certifications */}
            {certification.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                  Certifications
                </h2>
                {certification.map((c, i) => (
                  <div key={i} className="mb-3">
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-gray-600">
                      {c.institution} – {c.date}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="col-span-2 space-y-8">
            {/* Professional Summary */}
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700">{personalInfo.summary}</p>
            </div>

            {/* Experience */}
            {experienceInfo.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                  Experience
                </h2>
                {experienceInfo.map((exp, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-lg font-semibold">
                      {exp.position} – {exp.institution}
                    </p>
                    <p className="text-sm text-gray-600">
                      {exp.jDate} – {exp.eDate || "Present"}
                    </p>
                    <p className="text-gray-700 mt-2">{exp.role}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {educationInfo.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                  Education
                </h2>
                {educationInfo.map((edu, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-lg font-semibold">
                      {edu.level} – {edu.affiliated}
                    </p>
                    <p className="text-sm text-gray-600">{edu.year}</p>
                    <p className="text-gray-700">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                  Projects
                </h2>
                {projects.map((p, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-lg font-semibold">{p.title}</p>
                    <p className="text-gray-700 mt-1">{p.summary}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements */}
            {achievement.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-3 border-b pb-2">
                  Achievements
                </h2>
                {achievement.map((a, i) => (
                  <div key={i} className="mb-3">
                    <p className="font-semibold">{a.awardtitle}</p>
                    <p className="text-sm text-gray-600">
                      {a.institution} – {a.year || a.awarddate}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* PDF Download Button */}
        <div className="p-6 text-center">
          <PDFDownloadLink
            document={<ResumePDF2 form={form} />}
            fileName={`${personalInfo.fname || "Resume"}_Resume.pdf`}
          >
            {({ loading }) => (
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                {loading ? "Preparing PDF..." : "Download PDF"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default NormalDesign;
