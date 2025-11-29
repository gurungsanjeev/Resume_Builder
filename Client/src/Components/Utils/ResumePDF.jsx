import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

// Register fonts
Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf" },
    { src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc9.ttf", fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 1.4,
    backgroundColor: "#ffffff",
    padding: 30,
  },
  sidebar: {
    width: "29%",
    backgroundColor: "#0f172a",
    color: "#f1f5f9",
    padding: 25,
    paddingRight: 18,
  },
  main: {
    width: "71%",
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#f1f5f9",
    lineHeight: 1.2,
  },
  title: {
    fontSize: 12,
    color: "#94a3b8",
    marginBottom: 22,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#22d3ee",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 10,
    marginTop: 18,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#22d3ee",
  },
  sectionHeaderFirst: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#22d3ee",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 10,
    marginTop: 0,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#22d3ee",
  },
  textWhite: {
    fontSize: 10,
    marginBottom: 12,
    color: "#e2e8f0",
  },
  skill: {
    fontSize: 9,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 6,
    marginBottom: 6,
    backgroundColor: "#22d3ee",
    color: "#ffffff",
    borderRadius: 10,
  },
  expEduContainer: {
    marginBottom: 14,
  },
  expEduTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 3,
  },
  expEduDate: {
    fontSize: 10,
    color: "#6b7280",
    fontWeight: 500,
    marginBottom: 4,
  },
  entryDescription: {
    fontSize: 11,
    lineHeight: 1.4,
    color: "#374151",
  },
});

const ResumePDF = ({
  personalInfo,
  educationInfo,
  experienceInfo,
  certification,
  achievement,
  skills,
  projects,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.name}>
          {personalInfo.fname} {personalInfo.mname} {personalInfo.lname}
        </Text>
        <Text style={styles.title}>{personalInfo.title}</Text>

        <Text style={styles.sectionHeaderFirst}>Contact</Text>
        <Text style={styles.textWhite}>Email: {personalInfo.email}</Text>
        <Text style={styles.textWhite}>Phone: {personalInfo.phone}</Text>
        <Text style={styles.textWhite}>Address: {personalInfo.address}</Text>

        {skills.length > 0 && (
          <>
            <Text style={styles.sectionHeader}>Skills</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {skills.map((s, i) => (
                <Text key={i} style={styles.skill}>{s.skills}</Text>
              ))}
            </View>
          </>
        )}
      </View>

      {/* Main Section */}
      <View style={styles.main}>
        <Text style={styles.sectionHeaderFirst}>Professional Summary</Text>
        <Text style={styles.entryDescription}>{personalInfo.summary}</Text>

        {experienceInfo.length > 0 && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.sectionHeader}>Experience</Text>
            {experienceInfo.map((exp, i) => (
              <View key={i} style={styles.expEduContainer}>
                <Text style={styles.expEduTitle}>{exp.position} – {exp.institution}</Text>
                <Text style={styles.expEduDate}>{exp.jDate} – {exp.eDate || "Present"}</Text>
                <Text style={styles.entryDescription}>{exp.role}</Text>
              </View>
            ))}
          </View>
        )}

        {educationInfo.length > 0 && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.sectionHeader}>Education</Text>
            {educationInfo.map((edu, i) => (
              <View key={i} style={styles.expEduContainer}>
                <Text style={styles.expEduTitle}>{edu.level} – {edu.affiliated}</Text>
                <Text style={styles.expEduDate}>{edu.year}</Text>
                <Text style={styles.entryDescription}>GPA: {edu.gpa}</Text>
              </View>
            ))}
          </View>
        )}

        {projects.length > 0 && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.sectionHeader}>Projects</Text>
            {projects.map((p, i) => (
              <View key={i} style={styles.expEduContainer}>
                <Text style={styles.expEduTitle}>{p.title}</Text>
                <Text style={styles.entryDescription}>{p.summary}</Text>
              </View>
            ))}
          </View>
        )}

        {achievement.length > 0 && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.sectionHeader}>Achievements</Text>
            {achievement.map((a, i) => (
              <View key={i} style={styles.expEduContainer}>
                <Text style={styles.expEduTitle}>{a.awardtitle}</Text>
                <Text style={styles.expEduDate}>{a.institution} – {a.awarddate || a.year}</Text>
              </View>
            ))}
          </View>
        )}

        {certification.length > 0 && (
          <View style={{ marginTop: 12 }}>
            <Text style={styles.sectionHeader}>Certifications</Text>
            {certification.map((c, i) => (
              <View key={i} style={styles.expEduContainer}>
                <Text style={styles.expEduTitle}>{c.title}</Text>
                <Text style={styles.expEduDate}>{c.institution} – {c.date}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </Page>
  </Document>
);

export default ResumePDF;