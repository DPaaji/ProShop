import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return ( 
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><i className="fa-solid fa-user"></i>Cart</Nav.Link>
            <Nav.Link href="#link"><i className="fa-solid fa-cart-shopping"></i>Sign-in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
     );
}
 
export default Header;