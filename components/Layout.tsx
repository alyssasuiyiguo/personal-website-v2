import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#1e130b",
        minHeight: "100vh",
      }}
    >
      <Header />
      <LeftSidebar />
      <main>{children}</main>
      <RightSidebar />
    </div>
  );
};

export default Layout;
