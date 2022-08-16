import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar variant='dark' expand="sm" fixed='top' style={{ backgroundColor: '#1c2635' }}>
            <Container>
                <Navbar.Brand href="#home">ADLIX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='me-5'>Home</Nav.Link>
                        <Nav.Link href="#popular" className='me-5'>Popular</Nav.Link>
                        <Nav.Link href="#theaters" className='me-5'>In Theaters</Nav.Link>
                        <Nav.Link href="#footer" className='me-5'>Genre</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;