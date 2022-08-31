import { VStack, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import linkedin from "../public/linkedin-logo.png";
import github from "../public/github-sign.png";
import devpost from "../public/devpost-logo.png";

const RightSidebar = () => {
  return (
    <VStack
      style={{
        maxWidth: "5vw",
        height: "fitContent",
        position: "fixed",
        bottom: 0,
        right: 0,
        // overflowX: "hidden",
        paddingBottom: "1.6vw",
        textAlign: "center",
        paddingRight: "3.2vw",
      }}
      spacing={20}
    >
      <Box
        style={{
          transform: "rotate(90deg)",
        }}
        pr={20}
      >
        <a
          style={{
            color: "#debda6",
            fontFamily: "Overpass Mono, monospace",
            fontSize: "1vw",
          }}
          href="mailto:alyssasuiyiguo@gmail.com"
        >
          alyssasuiyiguo@gmail.com
        </a>
      </Box>
      <div style={{ borderLeft: "0.05vw solid #debda6", height: "16vw" }}></div>
    </VStack>
  );
};

export default RightSidebar;
