import React from 'react';
import { Box, Typography, Paper, Chip, Link, Stack } from '@mui/material';

const jobs = [
  {
    period: "July 2023 — Present",
    title: "Senior Software Engineer",
    company: "Time Investment Co.",
    url: "https://www.timeinvestment.com",
    description:
      "Developed and maintained C# .NET full-stack applications with modern and legacy frontends, alongside designing RESTful APIs integrated with SQL Server. Led requirement gathering, managed CI/CD pipelines, IIS servers, and third-party API integrations, while mentoring junior developers and external contractors. Implemented a Kafka queue in Docker, orchestrated with Kubernetes, and deployed to Azure.",
    technologies: ["ASP.NET", ".NET Core", ".NET Framework", "WPF", "SQL Server", "AKS"],
  },
  {
    period: "June 2022 — June 2023",
    title: "Software Engineer II",
    company: "Catalant Technologies",
    url: "https://www.catalant.com",
    description:
      "Developed Python-based GraphQL APIs to support contractors and corporations, while collaborating with product teams to gather requirements and deliver TDR presentations. Actively participated in agile workflows, including sprint planning and code reviews, ensuring high-quality and efficient development processes.",
    technologies: [
      "Python",
      "TypeScript",
      "HTML & SCSS",
      "GraphQL",
      "MySQL",
      "SAML",
      "Agile",
      "Vue.js"
    ]
  },
  {
    period: "May 2019 — June 2022",
    title: "Software Engineer",
    company: "Nvisia",
    url: "https://www.catalant.com",
    description:
      "Developed full-stack applications with C# .NET APIs, Angular, and React frontends, integrated with SQL Server databases. Led small teams through app design, development, and deployment on Azure and AWS, while mentoring junior developers and ensuring projects were delivered on time and within budget.",
    technologies: [
      "C#",
      "TypeScript",
      "HTML & SCSS",
      ".NET Core",
      "Angular",
      "Agile",
      "React"
    ]
  }
];

const education = [
  {
    period: "Sept 2017 — Dec 2019",
    degree: "Bachelor of Science",
    fieldOfStudy: "Computer Science",
    institution: "Old Dominion University",
    gpa: ["3.93"]
  }
];

function WorkExperience() {
  return (
    <Box
      id="background"
      sx={{
        minHeight: '75vh',
        padding: 4,
        // backgroundColor: 'background.default',
        alignContent:'center'
      }}
    >
      <Typography variant="h1" gutterBottom>
        Background
      </Typography>
      <Typography variant="h2" gutterBottom>
        Work Experience
      </Typography>

      {jobs.map((job, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            padding: 3,
            marginBottom: 4,
            backgroundColor: 'background.default',
            borderRadius: 2,
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems="flex-start"
          >
            {/* Period */}
            <Box sx={{ flexShrink: 0, minWidth: '150px' }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontWeight: 'bold' }}
              >
                {job.period}
              </Typography>
            </Box>

            {/* Details */}
            <Box>
              <Typography variant="h6" gutterBottom>
                <Link
                  href={job.url}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  color="text.primary"
                >
                  {job.title} · {job.company}
                </Link>
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {job.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {job.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    sx={{ marginRight: 1, marginBottom: 1 }}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </Stack>
        </Paper>
      ))}
      <Typography variant="h2" gutterBottom>
        Education
      </Typography>
      {education.map((ed, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            padding: 3,
            marginBottom: 4,
            backgroundColor: 'background.default',
            borderRadius: 2,
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems="flex-start"
          >
            {/* Period */}
            <Box sx={{ flexShrink: 0, minWidth: '150px' }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontWeight: 'bold' }}
              >
                {ed.period}
              </Typography>
            </Box>

            {/* Details */}
            <Box>
              <Typography variant="h6" gutterBottom>
                {ed.degree} · {ed.fieldOfStudy}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {ed.institution} · GPA: {ed.gpa}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      ))}
    </Box>
  );
}

export default WorkExperience;
