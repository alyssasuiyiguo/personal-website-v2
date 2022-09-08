import { Box, Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import Subtitle from "./Subtitle";
import Image from "next/image";
import me from "../public/me.jpg";

const About = () => {
  return (
    <div id="about">
      <Subtitle text="About Me" num="01" />
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(10, 1fr)">
        <GridItem colSpan={5}>
          <Flex
            direction="column"
            justify="space-around"
            style={{ height: "85%" }}
            mb={3}
          >
            <Text
              style={{
                fontFamily: "Palanquin, sans-serif",
                color: "#debda6",
                fontSize: "1vw",
              }}
            >
              I'm a computer science student at the University of Waterloo
              passionate about leveraging technology for social good.
            </Text>
            <Text
              style={{
                fontFamily: "Palanquin, sans-serif",
                color: "#debda6",
                fontSize: "1vw",
              }}
            >
              My interest in technology and development was sparked after
              attending my first hackathon, where I was introduced to the wide
              applications of technology and programming. Since then, I've
              strived to explore new technologies and programming languages. I
              have strong full-stack development experience, and am always
              seeking opportunities to expand my skillset!
            </Text>
            <Text
              style={{
                fontFamily: "Palanquin, sans-serif",
                color: "#debda6",
                fontSize: "1vw",
              }}
            >
              I also have avid leadership experience, as outlined in my{" "}
              <a
                style={{ textDecoration: "underline", color: "#d54864" }}
                href="#experience"
              >
                clubs and experience.
              </a>
            </Text>
            <Text
              style={{
                fontFamily: "Palanquin, sans-serif",
                color: "#debda6",
                fontSize: "1vw",
              }}
            >
              I'm always open to new learning opportunities, and would love to
              connect! Please feel free to{" "}
              <a
                style={{ textDecoration: "underline", color: "#d54864" }}
                href="mailto:alyssasuiyiguo@gmail.com"
              >
                reach out.
              </a>
            </Text>
          </Flex>
        </GridItem>
        <GridItem colStart={7} colEnd={10}>
          <Image src={me}></Image>
        </GridItem>
      </Grid>
    </div>
  );
};

export default About;
