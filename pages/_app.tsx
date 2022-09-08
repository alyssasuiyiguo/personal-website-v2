import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import theme from "../theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
