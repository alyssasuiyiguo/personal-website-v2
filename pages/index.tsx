import Intro from "../components/Intro";
import About from "../components/About";

const HomePage = () => {
  return (
    <div style={{ marginLeft: "10vw", marginRight: "8vw", marginTop: "2vh" }}>
      <Intro />
      <About />
    </div>
  );
};

export default HomePage;
