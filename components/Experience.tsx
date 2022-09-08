import Subtitle from "./Subtitle";
import { useState } from "react";
import {
  Grid,
  GridItem,
  Button,
  Text,
  HStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

const Experience = () => {
  const experiences = {
    "UW Blueprint": {
      name: "UW Blueprint",
      position: "Project Developer",
      description:
        "Blueprint is a student-run organization dedicated to building technological products for social good, originally founded at UC Berkeley. As a project developer, I am responsible for helping to develop one of UW Blueprint's many projects.",
      tech: [],
      date: "Aug 2022 - Present",
    },
    "Year Zero Studios": {
      name: "Year Zero Studios",
      position: "Full Stack Developer",
      description:
        "Year Zero Studios is a social impact lab that creates projects to shape the future of our society, with projects focusing in wellness and the future of work. I worked on the Well.Cards project, which is a social networking platform originally designed to allow wellness instructors to share their classes and offerings. Some notable contributions I made were to revamp the recurring events feature, redesign the collective membership page, and integrate Paypal and Venmo as payment options.",
      tech: ["TypeScript", "Node", "Express", "Next", "Firebase"],
      date: "May 2022 - Aug 2022",
    },
    "UW PM": {
      name: "UW PM",
      position: "Full Stack Developer",
      description:
        "The University of Waterloo Product Management Club, or UW PM, is dedicated to connecting students to opportunities in the product management field. As a developer, I worked on building our website, and had the honour of being part of the team to launch the website into production for the very first time. I developed the subtopic and article components for the PM guide, and redesigned the landing page for the PM guide, resulting in a more efficient user workflow.",
      tech: ["React.js", "Firebase", "Git", "Notion"],
      date: "May 2022 - Aug 2022",
    },
    MathSoc: {
      name: "MathSoc",
      position: "Website Developer",
      description:
        "The University of Waterloo Mathematics Society is the governing body representing all students in the faculty of math. As one of only two website developers, I was responsible for regular updates to our website, including updating pictures and links. Along with my fellow designer, I also redesigned our home page design, creating a wireframe using Figma and communicating with executive members of the council every step of the way. Implementing this design required some custom HTML and CSS code.",
      tech: ["Wordpress", "HTML", "CSS", "Figma"],
      date: "Sept 2021 - Dec 2021",
    },
    PuMP: {
      name: "PuMP",
      position: "Conferences Lead and Tech Team Developer",
      description:
        "Prospective Medical Professionals (PuMP) is a youth-led, non-profit organization dedicated to connecting under-served students across Canada to resources for pursuing a medical career. As part of the tech team, I designed the UI/UX for our new Sponsors page from scratch using Figma, and used HTML to redesign and transform our WordPress site to code. We are currently preparing for launch. As the Conferences Lead for the national logistics team, I led and organized 15 logistics officers in hosting 5 conferences averaging 150 attendees each.",
      tech: ["HTML", "Figma", "Git", "Trello"],
      date: "May 2020 - Present",
    },
    FFFTO: {
      name: "FFFTO",
      position: "Website Developer",
      description:
        "Fridays for Future Toronto (FFFTO) is the Toronto-based chapter of the international climate movement led by youth. As the primary web developer, I led a website theme redesign, leading to 140% increased web traffic (over 4400 visitors). I was also responsible for regular updates and maintenance, including pictures and events. This experience has taught me a lot about creating aesthetically pleasing yet efficient website designs.",
      date: "May 2020 - Dec 2021",
    },
    "Camp Explore": {
      name: "Camp Explore",
      position: "Coding Camp Student Leader",
      description:
        "Camp Explore is a summer camp run by the Peel District School Board, dedicated to introducing children from under-served communities to programming. I directly supported 60 middle school students to teach them basics of Scratch, JavaScript, and HTML/CSS, enabling them to independently create their final projects. I also independently planned and led a code-a-long workshop:",
      date: "June 2021 - Aug 2021",
      video: "https://www.youtube.com/watch?v=IjSdwbDU5_E",
    },
  };
  const [experience, setExperience] = useState("Year Zero Studios");

  return (
    <div id="experience">
      <Subtitle text={"Experience"} num="02"></Subtitle>
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1} style={{ border: "1px solid #d54864" }}>
          <Grid templateRows="repeat(7, 1fr)" templateColumns="repeat(1, 1fr)">
            {Object.keys(experiences).map((key) => {
              return (
                <GridItem width="100%" height="5vh">
                  <Button
                    w="full"
                    h="full"
                    variant="menu"
                    // style={{
                    //   //   borderRadius: "0",
                    //   color: "#debda6",
                    //   fontFamily: "Overpass Mono, monospace",
                    //   //   border: "none",
                    //   //   backgroundColor: "#1e130b",
                    // }}
                    // sx={{
                    //   "&:hover": {
                    //     backgroundColor: "rgb(222, 189, 166, 0.1",
                    //     color: "#d54864",
                    //   },
                    // }}
                    _hover={{
                      backgroundColor: "red",
                      color: "#d54864",
                    }}
                    _active={{
                      backgroundColor: "rgba(222, 189, 166, 0.1)",
                      color: "#d54864",
                      borderLeft: "0.4vw solid #d54864",
                    }}
                    isActive={experience === key}
                    onClick={() => setExperience(key)}
                  >
                    {key}
                  </Button>
                  {/* <div onClick={() => setExperience(key)}>
                    <Box
                      as="button"
                      height="100%"
                      width="100%"
                      fontFamily="Overpass Mono, monospace"
                      color="#debda6"
                      _hover={{
                        backgroundColor: "rgba(222, 189, 166, 0.1)",
                        color: "#d54864",
                      }}
                      _active={{
                        backgroundColor: "rgba(222, 189, 166, 0.1)",
                        color: "#d54864",
                        borderLeft: "0.4vw solid #d54864",
                      }}
                      isActive={experience === key}
                    >
                      {key}
                    </Box>
                  </div> */}
                </GridItem>
              );
            })}
          </Grid>
        </GridItem>
        <GridItem
          colSpan={3}
          style={{
            border: "1px solid #d54864",
            padding: "3%",
            maxHeight: "35vh",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Text
            style={{
              textDecoration: "underline",
              paddingBottom: "3%",
              fontFamily: "Overpass Mono, monospace",
              color: "#d54864",
              fontSize: "1.2vw",
            }}
          >
            {experiences[experience].position}
          </Text>
          <Text
            style={{
              fontFamily: "Palanquin, sans-serif",
              color: "#debda6",
              fontSize: "1vw",
            }}
          >
            {experiences[experience].description}
          </Text>
          <HStack>
            {experiences[experience].tech &&
              experiences[experience].tech.map((lang, index) => {
                if (index === experiences[experience].tech.length - 1) {
                  return (
                    <Text
                      style={{
                        fontFamily: "Overpass Mono, monospace",
                        color: "#d54864",
                        fontSize: "1.1vw",
                        marginTop: "1vw",
                      }}
                    >
                      {lang}
                    </Text>
                  );
                } else {
                  return (
                    <Text
                      style={{
                        fontFamily: "Overpass Mono, monospace",
                        color: "#d54864",
                        fontSize: "1.1vw",
                        marginTop: "1vw",
                      }}
                    >
                      {`${lang} • `}
                    </Text>
                  );
                }
              })}
          </HStack>
          <Text
            style={{
              fontFamily: "Overpass Mono, monospace",
              color: "#debda6",
              fontSize: "1.1vw",
              marginTop: "1vw",
            }}
          >
            {experiences[experience].date}
          </Text>
          {experiences[experience].video && (
            <ReactPlayer
              url={experiences[experience].video}
              width="100%"
              style={{ padding: "5%" }}
            />
          )}
        </GridItem>
      </Grid>
    </div>
  );
};

export default Experience;
