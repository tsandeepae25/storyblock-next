import { Container } from "../styles/styled/layout.styled";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Container>
        <Navbar />
        {children}
      </Container>
    </div>
  );
}

export default Layout;