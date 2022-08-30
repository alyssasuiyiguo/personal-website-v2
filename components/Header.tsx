import { Flex, HStack, extendTheme, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import Resume from "./Resume";

const theme = extendTheme({
  textStyles: {
    numbers: {
      color: "#d54864",
      fontFamily: "Overpass Mono, monospace",
      fontSize: "2.2vw",
    },
  },
});

const Header = () => {
  return (
    <Flex justify="space-between" px="5" pt="5" style={{ maxWidth: "100vw" }}>
      <div style={{ maxWidth: "3.5%", height: "auto" }}>
        <Link href="/">
          <a>
            <Image src={logo} />
          </a>
        </Link>
      </div>
      <HStack gap="8">
        <Flex gap="0">
          <Text
            style={{
              color: "#d54864",
              fontFamily: "Overpass Mono, monospace",
              fontSize: "1.1vw",
              marginLeft: "0 0.8vw",
              paddingLeft: "0 0.8vw",
            }}
          >
            01.
          </Text>
          <Text
            style={{
              color: "#debda6",
              fontFamily: "Overpass Mono, monospace",
              fontSize: "1.1vw",
              marginRight: "0 0.8vw",
              paddingRight: "0 0.8vw",
            }}
          >
            About
          </Text>
        </Flex>
        <Flex gap="0">
          <Text
            style={{
              color: "#d54864",
              fontFamily: "Overpass Mono, monospace",
              fontSize: "1.1vw",
              marginLeft: "0 0.8vw",
              paddingLeft: "0 0.8vw",
            }}
          >
            02.
          </Text>
          <Text
            style={{
              color: "#debda6",
              fontFamily: "Overpass Mono, monospace",
              fontSize: "1.1vw",
              marginRight: "0 0.8vw",
              paddingRight: "0 0.8vw",
            }}
          >
            Experience
          </Text>
        </Flex>
        <Flex gap="0">
          <Text
            style={{
              color: "#d54864",
              fontFamily: "Overpass Mono, monospace",
              fontSize: "1.1vw",
              marginLeft: "0 0.8vw",
              paddingLeft: "0 0.8vw",
            }}
          >
            03.
          </Text>
          <Text
            style={{
              color: "#debda6",
              fontFamily: "Overpass Mono, monospace",
              fontSize: "1.1vw",
              marginRight: "0 0.8vw",
              paddingRight: "0 0.8vw",
            }}
          >
            Contact
          </Text>
        </Flex>
        <Resume text={"Resume"} />
      </HStack>
    </Flex>
  );
};

export default Header;
