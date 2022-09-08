import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        menu: {
          color: "#debda6",
          fontFamily: "Overpass Mono, monospace",
          rounded: "none",
          _hover: {
            backgroundColor: "rgb(222, 189, 166, 0.1",
            color: "#d54864",
          },
          _active: {
            backgroundColor: "rgb(222, 189, 166, 0.1",
            color: "#d54864",
            borderLeft: "0.4vw solid #d54864",
          },
        },
      },
    },
  },
});

export default theme;
