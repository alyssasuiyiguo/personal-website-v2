import { VStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import linkedin from "../public/linkedin-logo.png";
import github from "../public/github-sign.png";
import devpost from "../public/devpost-logo.png";

const LeftSidebar = () => {
  return (
    <VStack
      style={{
        height: "fitContent",
        maxWidth: "5vw",
        position: "fixed",
        bottom: 0,
        left: 0,
        overflowX: "hidden",
        paddingBottom: "1.6vw",
        textAlign: "center",
        paddingLeft: "3.2vw",
      }}
      spacing={5}
    >
      <Link href="https://www.linkedin.com/in/alyssa-guo/" passhref>
        <a target="_blank">
          <Image src={linkedin} />
        </a>
      </Link>
      <Link href="https://github.com/alyssasuiyiguo" passhref>
        <a target="_blank">
          <Image src={github} />
        </a>
      </Link>
      <Link
        href="https://devpost.com/alyssasuiyiguo?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
        passhref
      >
        <a target="_blank">
          <Image src={devpost} />
        </a>
      </Link>
      <div style={{ borderLeft: "0.05vw solid #debda6", height: "16vw" }}></div>
    </VStack>
  );
};

export default LeftSidebar;
