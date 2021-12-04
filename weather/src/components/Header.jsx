import {
  Form,
  Navbar,
  Nav,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Navbar.Brand href="#home">
        <img
          src="logo.png"
          style={{ width: "100px", height: "40px" }}
          className="ml-4"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ml-5">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Weather in your city"
              className="mr-sm-2"
            />
          </Form>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Guide</Nav.Link>
          <Nav.Link href="#link">API</Nav.Link>

          <Nav.Link href="#home">Pricing</Nav.Link>
          <Nav.Link href="#link">Maps</Nav.Link>

          <Nav.Link href="#home">Partners</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <NavDropdown title="Support" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
