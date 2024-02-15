import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import './style.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={require("../../assets/images/logo_dark.png")} width={35} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <div className='nav-item'>
                        <Nav.Link href="/">Information</Nav.Link>
                    </div>
                    <div className='nav-item'>
                        <Nav.Link href="/playground">Playground</Nav.Link>
                    </div>
                    <div className='nav-item'>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </div>
                </Nav>
            </Container>
      </Navbar>
    );
};

export default NavBar;
