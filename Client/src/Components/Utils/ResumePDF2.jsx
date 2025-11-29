// ResumePDF2.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

// Register Roboto font
Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf" },
    { src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf", fontWeight: 700 },
  ],
});

// Styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 1.5,
    padding: 30,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
  name: { fontSize: 22, fontWeight: "bold" },
  title: { fontSize: 12, color: "#93c5fd", marginTop: 4 },
  contactItem: { fontSize: 10, color: "#e2e8f0", marginTop: 2 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
    color: "#0f172a",
    borderBottomWidth: 1.5,
    borderBottomColor: "#0f172a",
    paddingBottom: 3,
    textTransform: "uppercase",
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  leftCol: { width: "32%" },
  rightCol: { width: "65%" },
  itemTitle: { fontSize: 12, fontWeight: "bold", color: "#111827" },
  itemSubtitle: { fontSize: 10, color: "#6b7280", marginBottom: 3 },
  description: { fontSize: 10, color: "#374151", marginBottom: 8 },
  listItem: { fontSize: 10, color: "#374151", marginBottom: 2 },
});

const ResumePDF2 = ({ form }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{form.fullName || "Your Name"}</Text>
        {form.title && <Text style={styles.title}>{form.title}</Text>}
        {form.email && <Text style={styles.contactItem}>📧 {form.email}</Text>}
        {form.phone && <Text style={styles.contactItem}>📞 {form.phone}</Text>}
        {form.address && <Text style={styles.contactItem}>📍 {form.address}</Text>}
      </View>

      <View style={styles.row}>
        {/* Left Sidebar */}
        <View style={styles.leftCol}>
          {/* Contact */}
          <Text style={styles.sectionTitle}>Contact</Text>
          {form.email && <Text style={styles.listItem}>📧 {form.email}</Text>}
          {form.phone && <Text style={styles.listItem}>📞 {form.phone}</Text>}
          {form.address && <Text style={styles.listItem}>📍 {form.address}</Text>}

          {/* Skills */}
          {form.skills && form.skills.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Skills</Text>
              {form.skills.map((s, i) => (
                <Text key={i} style={styles.listItem}>• {s}</Text>
              ))}
            </>
          )}

          {/* Certifications */}
          {form.certifications && form.certifications.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Certifications</Text>
              {form.certifications.map((c, i) => (
                <View key={i} style={{ marginBottom: 4 }}>
                  <Text style={styles.itemTitle}>{c.title}</Text>
                  <Text style={styles.itemSubtitle}>{c.institution} – {c.date}</Text>
                </View>
              ))}
            </>
          )}
        </View>

        {/* Right Main Content */}
        <View style={styles.rightCol}>
          {/* Professional Summary */}
          {form.summary && (
            <>
              <Text style={styles.sectionTitle}>Professional Summary</Text>
              <Text style={styles.description}>{form.summary}</Text>
            </>
          )}

          {/* Experience */}
          {form.experience && form.experience.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Experience</Text>
              {form.experience.map((exp, i) => (
                <View key={i} style={{ marginBottom: 6 }}>
                  <Text style={styles.itemTitle}>{exp.jobTitle} – {exp.company}</Text>
                  <Text style={styles.itemSubtitle}>{exp.duration}</Text>
                  <Text style={styles.description}>{exp.description}</Text>
                </View>
              ))}
            </>
          )}

          {/* Education */}
          {form.education && form.education.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Education</Text>
              {form.education.map((edu, i) => (
                <View key={i} style={{ marginBottom: 6 }}>
                  <Text style={styles.itemTitle}>{edu.degree} – {edu.institution}</Text>
                  <Text style={styles.itemSubtitle}>Year: {edu.year}</Text>
                </View>
              ))}
            </>
          )}

          {/* Projects */}
          {form.projects && form.projects.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Projects</Text>
              {form.projects.map((p, i) => (
                <View key={i} style={{ marginBottom: 6 }}>
                  <Text style={styles.itemTitle}>{p.projectName}</Text>
                  <Text style={styles.description}>{p.projectDesc}</Text>
                </View>
              ))}
            </>
          )}

          {/* Achievements */}
          {form.achievements && form.achievements.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Achievements</Text>
              {form.achievements.map((a, i) => (
                <View key={i} style={{ marginBottom: 6 }}>
                  <Text style={styles.itemTitle}>{a.awardtitle}</Text>
                  <Text style={styles.itemSubtitle}>{a.institution} – {a.year || a.awarddate}</Text>
                </View>
              ))}
            </>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF2;
