import { Container } from "../styles/styled/layout.styled";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>

  );
}

export default Layout;