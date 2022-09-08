import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div
      style={{
        marginLeft: "10vw",
        marginRight: "8vw",
        marginTop: "2vh",
        paddingBottom: "5vh",
      }}
    >
      <Intro />
      <Box ml={5}>
        <About />
      </Box>
      <Box ml={5}>
        <Experience />
      </Box>
    </div>
  );
};

export default HomePage;
