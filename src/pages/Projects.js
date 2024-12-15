import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projects = [
    { title: "Home Automation with Metrics", description: <>
      A Raspberry Pi hosted Home Automation instance. <br />
      Wired up with Prometheus metrics feeding Grafana visualizations. <br/>
      Written with Go, using a MongoDB database, containerized in Docker.
    </>,
    url:"https://github.com/DuffyCodes/home_automation_dashboard" },
    { title: "NHL Game Win Predictor", description: <>
      A prediction engine to determine who will win any given NHL game. <br />
      Uses machine learning to build models to predict outcomes. <br/>
      Written with Python, using a MySQL database.
    </>, 
    url:"https://github.com/DuffyCodes/nhl-betting-predictor"},
    { title: "This Website!", description: <>
      A personal portfolio website to highlight my professional acheivements and personal details. <br/>
      Written in React, using Material UI framework for stylizing.
    </>, 
    url:"https://github.com/DuffyCodes/personal-page"},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        padding: 4,
        // backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="h6" gutterBottom>
        All projects can be found in my github.
      </Typography>

      <Slider {...settings} style={{ width: "100%", maxWidth: "600px" }}>
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{
              padding: 4,
              textAlign: "center",
              backgroundColor: "background.default",
              borderRadius: "8px",
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body2" gutterBottom
                color="text.secondary">
              {project.description}
            </Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
              <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  color="black"
                >
                  GitHub
                </Link>
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Projects;
