import React from "react";
import { Box, Typography,Link } from "@mui/material";

function Home({ setCurrentView }) {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        padding: 4,
        // backgroundColor: "background.default",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <Typography variant="h1" gutterBottom>
        Hi, I'm Matt
      </Typography>
      <Typography variant="body1" gutterBottom>
        <p>
          I am a goal-driven software engineer with several years of experience
          in designing quality and large-scale applications. I love challenges
          and being a problem solver, I develop solutions that make a positive
          impact to the end user.
        </p>
        <p>
          During my professional experience I have been involved in the entire
          software development process and worked in collaboration with the
          other teams to develop complex software apps. I have a good knowledge
          of software development processes and procedures and use Agile methods
          to produce high quality, well structured and effective code.
        </p>
        <p>
          I have used many tools, languages, and frameworks to build, deploy and
          maintain numerous applications. I'm experienced in using C#, .NET
          Core, .NET Framework, Python, SQL Server, MySQL, Angular, ASP.NET, and
          RESTful APIs. I have deployed and maintained apps to cloud infrastructure,
          using CI/CD pipelines (IaC) to build, test and deploy to Azure. I built and 
          maintained a K8s service running Kafka to handle data streams from third party 
          vendor systems. I also have exposure to React, Vue.js, MongoDB, and GO. I am
          very confident I can pick up any framework or language, and be
          productive in a short period of time.
        </p>
        <p>
          <Link
            to="/about"
            component={Link}
            underline="hover"
            color="black"
            onClick={() => setCurrentView("about")}
          >
            Learn more about me!
          </Link>
        </p>
      </Typography>
    </Box>
  );
}

export default Home;
