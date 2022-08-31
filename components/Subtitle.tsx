import { HStack, Text } from "@chakra-ui/react";

const Subtitle = ({ text, num }) => {
  return (
    <HStack mt={20} mb={10}>
      <Text
        style={{
          color: "#d54864",
          fontFamily: "Overpass Mono, monospace",
          fontSize: "2.2vw",
        }}
      >{`${num}.`}</Text>
      <Text
        style={{
          fontFamily: "Palanquin Dark, sans-serif",
          color: "#eeded3",
          fontSize: "2.5vw",
        }}
        pb={3}
      >
        {text}
      </Text>
      <hr
        style={{
          width: "300px",
          marginLeft: "2vw",
          backgroundColor: "#debda6",
          border: "none",
          height: "1px",
        }}
      ></hr>
    </HStack>
  );
};

export default Subtitle;
