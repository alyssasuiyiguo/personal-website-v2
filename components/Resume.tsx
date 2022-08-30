import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Resume = ({ text }) => {
  return (
    <a href="./resume.pdf" download="Alyssa Guo Resume">
      <Button
        variant="outline"
        style={{
          borderColor: "#d54864",
          color: "#d54864",
          fontFamily: "Overpass Mono, monospace",
          borderRadius: "0",
        }}
      >
        {text}
      </Button>
    </a>
  );
};

export default Resume;
