import React, {Component} from 'react';
import { withRouter } from 'next/router'
import { Navbar,Container,Nav } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.preventDefault()
        this.props.router.push(e.target.getAttribute('href'))
    }

    render() {
        let styleHeader = {
            zIndex: 5,
        }
        let styleNavBar = {
            position:'fixed',
            top: 0,
            zIndex: 5,
            width: '100%',
            padding: '20px 25px',
            pointerEvents: 'initial',
            background: 'rgba(0,0,0,0.5)'
        }
        return (
            <header style={styleHeader}>
                <Navbar expand="lg" variant="dark" style={styleNavBar}>
                    <Container>
                        <Navbar.Brand href="/" onClick={this.handleClick} >DzRise Digital</Navbar.Brand>
                        <div className="ml-auto"></div>
                        <Nav>
                            <Nav.Link href="/" onClick={this.handleClick}>Главная</Nav.Link>
                            <Nav.Link href="/portfolio" onClick={this.handleClick}>Портфолио</Nav.Link>
                            <Nav.Link href="/services" onClick={this.handleClick}>Услуги</Nav.Link>
                            <Nav.Link href="/blog" onClick={this.handleClick}>Блог</Nav.Link>
                            <Nav.Link href="/aboutme" onClick={this.handleClick}>Обо мне</Nav.Link>
                            <Nav.Link href="/contacts" onClick={this.handleClick}>Контакты</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/"><i className="icon-magnifier"></i></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(Header);
