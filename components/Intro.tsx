import { Text } from "@chakra-ui/react";
import Resume from "./Resume";

const Intro = () => {
  return (
    <div>
      <Text
        style={{
          fontFamily: "Overpass Mono, monospace",
          color: "#d54864",
          fontSize: "1.5vw",
        }}
      >
        Hi, my name is
      </Text>
      <Text
        style={{
          fontFamily: "Palanquin Dark, sans-serif",
          color: "#eeded3",
          fontSize: "5vw",
        }}
        mb={3}
      >
        Alyssa Guo
      </Text>
      <Text
        style={{
          fontFamily: "Palanquin, sans-serif",
          color: "#debda6",
          fontSize: "1vw",
        }}
      >
        I'm a computer science student at the University of Waterloo (class of
        2026). Welcome to my personal website!
      </Text>
      <Text
        style={{
          fontFamily: "Palanquin, sans-serif",
          color: "#debda6",
          fontSize: "1vw",
        }}
        mb={8}
        mt={1}
      >
        To get a TLDR of my skills and experience,
      </Text>
      <Resume text="Check out my resume!" />
    </div>
  );
};

export default Intro;
