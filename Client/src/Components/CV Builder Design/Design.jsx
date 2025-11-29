// // import React, { useState, useEffect, useRef } from "react";
// // import html2pdf from "html2pdf.js";

// // const Design = () => {
// //   const [personalInfo, setPersonalInfo] = useState({});
// //   const [educationInfo, setEducationInfo] = useState([]);
// //   const [experienceInfo, setExperienceInfo] = useState([]);
// //   const [certification, setCertification] = useState([]);
// //   const [achievement, setAchievement] = useState([]);
// //   const [skills, setSkills] = useState([]);
// //   const [projects, setProjects] = useState([]);

// //   const resumeRef = useRef(); // Ref for PDF download

// //   useEffect(() => {
// //     const personal = JSON.parse(localStorage.getItem("personalDetails"));
// //     const education = JSON.parse(localStorage.getItem("EducationDetails"));
// //     const experience = JSON.parse(localStorage.getItem("WorkExperiences"));
// //     const certificationData = JSON.parse(localStorage.getItem("CertificateData"));
// //     const achievementData = JSON.parse(localStorage.getItem("AchievementData"));
// //     const skillsData = JSON.parse(localStorage.getItem("SkillsDetails"));
// //     const projectData = JSON.parse(localStorage.getItem("ProjectData"));

// //     if (personal) setPersonalInfo(personal);
// //     if (education) setEducationInfo(education);
// //     if (experience) setExperienceInfo(experience);
// //     if (certificationData) setCertification(certificationData);
// //     if (achievementData) setAchievement(achievementData);
// //     if (skillsData) setSkills(skillsData);
// //     if (projectData) setProjects(projectData);
// //   }, []);

// //   // Function to download PDF
// //   const handleDownload = () => {
// //     const element = resumeRef.current;
// //     const options = {
// //       margin: 0.5,
// //       filename: `${personalInfo.fname || "Resume"}_Resume.pdf`,
// //       image: { type: "jpeg", quality: 0.98 },
// //       html2canvas: { scale: 2, useCORS: true },
// //       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
// //     };
// //     html2pdf().set(options).from(element).save();
// //   };

// //   return (
// //     <div className="relative bg-[#f3f3f3] min-h-screen py-8">
// //       {/* Download Button */}
// //       <div className="fixed top-4 right-4 z-50">
// //         <button
// //           onClick={handleDownload}
// //           className="bg-[#2563EB] text-white px-4 py-2 rounded hover:bg-[#1D4ED8] transition shadow-lg"
// //         >
// //           Download as PDF
// //         </button>
// //       </div>

// //       {/* Resume Preview */}
// //       <div
// //         ref={resumeRef}
// //         className="max-w-4xl mx-auto p-10 shadow-lg rounded-lg font-sans leading-relaxed"
// //         style={{ backgroundColor: "#ffffff", color: "#1a1a1a" }}
// //       >
// //         {/* Header */}
// //         <header className="pb-6 mb-6">
// //           <h1 className="text-3xl font-bold uppercase tracking-wide" style={{ color: "#111827" }}>
// //             {personalInfo.fname} {personalInfo.mname} {personalInfo.lname}
// //           </h1>
// //           <p className="text-lg" style={{ color: "#374151" }}>{personalInfo.title}</p>
// //           <div className="mt-2 text-sm space-y-1" style={{ color: "#6B7280" }}>
// //             <p>Email: {personalInfo.email}</p>
// //             <p>Phone: {personalInfo.phone}</p>
// //             <p>Address: {personalInfo.address}</p>
// //           </div>
// //         </header>

// //         {/* Summary */}
// //         <section className="mb-8">
// //           <h2 className="text-xl font-semibold border-b mb-2" style={{ color: "#111827" }}>
// //             Professional Summary
// //           </h2>
// //           <p className="text-sm" style={{ color: "#1F2937" }}>{personalInfo.summary}</p>
// //         </section>

// //         {/* Experience */}
// //         <section className="mb-8">
// //           <h2 className="text-xl font-semibold border-b mb-2" style={{ color: "#111827" }}>
// //             Professional Experience
// //           </h2>
// //           {experienceInfo.map((exp, index) => (
// //             <div key={index} className="mb-5">
// //               <div className="flex justify-between">
// //                 <h3 className="font-semibold text-md" style={{ color: "#1F2937" }}>{exp.position} – {exp.institution}</h3>
// //                 <span className="text-sm" style={{ color: "#6B7280" }}>{exp.jDate} – {exp.eDate || "Present"}</span>
// //               </div>
// //               <p className="text-sm" style={{ color: "#374151" }}>{exp.role}</p>
// //             </div>
// //           ))}
// //         </section>

// //         {/* Education */}
// //         <section className="mb-8">
// //           <h2 className="text-xl font-semibold border-b mb-2" style={{ color: "#111827" }}>Education</h2>
// //           {educationInfo.map((edu, index) => (
// //             <div key={index} className="mb-4">
// //               <div className="flex justify-between">
// //                 <h3 className="font-semibold text-md" style={{ color: "#1F2937" }}>{edu.level} – {edu.affiliated}</h3>
// //                 <span className="text-sm" style={{ color: "#6B7280" }}>{edu.year}</span>
// //               </div>
// //               <p className="text-sm" style={{ color: "#374151" }}>GPA: {edu.gpa}</p>
// //             </div>
// //           ))}
// //         </section>

// //         {/* Skills */}
// //         <section className="mb-8">
// //           <h2 className="text-xl font-semibold border-b mb-2" style={{ color: "#111827" }}>Skills</h2>
// //           <div className="flex flex-wrap gap-3 mt-2">
// //             {skills.map((skill, index) => (
// //               <span key={index} className="px-3 py-1 rounded-full" style={{ backgroundColor: "#E5E7EB", color: "#111827", fontSize: "0.875rem" }}>
// //                 {skill.skills}
// //               </span>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Certifications */}
// //         {certification.length > 0 && (
// //           <section className="mb-8">
// //             <h2 className="text-xl font-semibold border-b mb-2" style={{ color: "#111827" }}>Certifications</h2>
// //             {certification.map((cert, index) => (
// //               <div key={index} className="mb-2">
// //                 <p className="text-sm font-medium" style={{ color: "#1F2937" }}>
// //                   {cert.title} – <span style={{ fontStyle: "italic", color: "#6B7280" }}>{cert.institution}</span>
// //                 </p>
// //                 <p className="text-xs" style={{ color: "#6B7280" }}>{cert.date}</p>
// //               </div>
// //             ))}
// //           </section>
// //         )}

// //         {/* Achievements */}
// //         {achievement.length > 0 && (
// //           <section className="mb-8">
// //             <h2 className="text-xl font-semibold border-b mb-2" style={{ color: "#111827" }}>Achievements</h2>
// //             {achievement.map((ach, index) => (
// //               <div key={index} className="mb-2">
// //                 <p className="text-sm font-medium" style={{ color: "#1F2937" }}>
// //                   {ach.awardtitle} – <span style={{ fontStyle: "italic", color: "#6B7280" }}>{ach.institution}</span>
// //                 </p>
// //                 <p className="text-xs" style={{ color: "#6B7280" }}>{ach.awarddate || ach.year}</p>
// //               </div>
// //             ))}
// //           </section>
// //         )}

// //         {/* Projects */}
// //         {projects.length > 0 && (
// //           <section>
// //             <h2 className="text-xl font-semibold border-b mb-2" style={{ color: "#111827" }}>Projects</h2>
// //             {projects.map((proj, index) => (
// //               <div key={index} className="mb-4">
// //                 <h3 className="font-semibold text-md" style={{ color: "#1F2937" }}>{proj.title}</h3>
// //                 <p className="text-sm" style={{ color: "#374151" }}>{proj.summary}</p>
// //               </div>
// //             ))}
// //           </section>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Design;







// import React, { useState, useEffect } from "react";
// import ResumePDF from "../Utils/ResumePDF";
// import { PDFDownloadLink } from "@react-pdf/renderer";

// const Design = () => {
//   const [personalInfo, setPersonalInfo] = useState({});
//   const [educationInfo, setEducationInfo] = useState([]);
//   const [experienceInfo, setExperienceInfo] = useState([]);
//   const [certification, setCertification] = useState([]);
//   const [achievement, setAchievement] = useState([]);
//   const [skills, setSkills] = useState([]);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const personal = JSON.parse(localStorage.getItem("personalDetails"));
//     const education = JSON.parse(localStorage.getItem("EducationDetails"));
//     const experience = JSON.parse(localStorage.getItem("WorkExperiences"));
//     const certificationData = JSON.parse(localStorage.getItem("CertificateData"));
//     const achievementData = JSON.parse(localStorage.getItem("AchievementData"));
//     const skillsData = JSON.parse(localStorage.getItem("SkillsDetails"));
//     const projectData = JSON.parse(localStorage.getItem("ProjectData"));

//     if (personal) setPersonalInfo(personal);
//     if (education) setEducationInfo(education);
//     if (experience) setExperienceInfo(experience);
//     if (certificationData) setCertification(certificationData);
//     if (achievementData) setAchievement(achievementData);
//     if (skillsData) setSkills(skillsData);
//     if (projectData) setProjects(projectData);
//   }, []);

//   return (
//     <div className="p-8">
//       <PDFDownloadLink
//         document={
//           <ResumePDF
//             personalInfo={personalInfo}
//             educationInfo={educationInfo}
//             experienceInfo={experienceInfo}
//             certification={certification}
//             achievement={achievement}
//             skills={skills}
//             projects={projects}
//           />
//         }
//         fileName={`${personalInfo.fname || "Resume"}_Resume.pdf`}
//       >
//         {({ loading }) => (
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//             {loading ? "Preparing PDF..." : "Download PDF"}
//           </button>
//         )}
//       </PDFDownloadLink>
//     </div>
//   );
// };

// export default Design;
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