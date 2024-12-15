import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import "./about-me.scss";
import { travelItemData, hobbyItemData } from "../images/imageConsts";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const AboutMe = () => {
  return (
    <Box
      sx={{
        // background: 'linear-gradient(90deg, rgba(38,70,83,1) 0%, rgba(38,70,83,1) 67%, rgba(167,69,91,1) 100%)',
        color: "text.primary",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", paddingY: 8 }}>
        <Avatar
          src={require("../images/1550159494967.jpg")}
          alt="Profile Picture"
          sx={{ width: 150, height: 150, marginX: "auto", marginBottom: 4 }}
        />
      <Typography variant="h1" gutterBottom>
          Hi, I'm Matt
        </Typography>
      </Container>

      <Container
        maxWidth="lg"
        id="about"
        sx={{ textAlign: "center", paddingY: 8 }}
      >
        <Typography variant="h4" gutterBottom>
          Who Am I?
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can read about my professional chops on my Home page. Here you can
          find who I <i>am</i>, not what I <i>do</i>.
        </Typography>
        <Typography variant="body1">
          I'm a dad of two (usually) wonderful boys and two spoiled dogs.
        </Typography>
        <div className="avatar-container">
          <Avatar
            src={require("../images/familyPhoto.jpg")}
            alt="Family Picture"
            sx={{ width: "50%", height: "auto", borderRadius: 4 }}
            variant="square"
          />
        </div>
        <Typography variant="body1">
          My family and I are passionate about travel and exploring new places
          and experiencing new things.
        </Typography>
        <div className="avatar-container">
          <ImageList
            sx={{ width: "100%", height: 500 }}
            variant="quilted"
            cols={4}
            rowHeight={200}
          >
            {travelItemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      {/* <InfoIcon /> */}
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>

        <Typography variant="body1">
          When I have free time, I like to make good food, brew some beer, read good books, and
          camp.
        </Typography>
        <div className="avatar-container">
          <ImageList
            sx={{ width: "100%", height: 450 }}
            cols={3}
            rowHeight={200}
          >
            {hobbyItemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <Typography variant="body1">
          Feel free to contact me through LinkedIn!
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutMe;
