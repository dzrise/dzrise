import React, {Component} from 'react';
import { withRouter } from 'next/router'
import styled from 'styled-components';
import {Container, Row, Col, Nav} from "react-bootstrap";


class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.preventDefault()
        this.props.router.push(e.target.getAttribute('href'))
    }

    render() {
        let styleFooter = {
            backgroundColor: 'var(--footer-bg-color)',
        }
        return (
            <footer style={styleFooter}>
                <section>
                    <Container>
                        <Row>
                            <Col sm='3'>
                                <Logo href="/" onClick={this.handleClick} >DzRise Digital</Logo>
                                <Copyright>© Денис Захаров 2020 </Copyright>
                            </Col>
                            <Col sm='3'>
                                <Nav defaultActiveKey="/" className="flex-column">
                                    <Nav.Link href="/" onClick={this.handleClick}>Главная</Nav.Link>
                                    <Nav.Link href="/portfolio" onClick={this.handleClick}>Портфолио</Nav.Link>
                                    <Nav.Link href="/services" onClick={this.handleClick}>Услуги</Nav.Link>
                                    <Nav.Link href="/blog" onClick={this.handleClick}>Блог</Nav.Link>
                                    <Nav.Link href="/aboutme" onClick={this.handleClick}>Обо мне</Nav.Link>
                                    <Nav.Link href="/contacts" onClick={this.handleClick}>Контакты</Nav.Link>
                                </Nav>
                            </Col>
                            <Col sm='3'>

                            </Col>
                            <Col sm='3'>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </footer>
        )
    }
}
let Logo = styled.a`
    color: var(--white-color);
    text-decoration: none;
    font-size: 2rem;
    font-weight: 900;
    &:hover {
      color: var(--secondary);
      text-decoration: none;
    }
`
const Copyright = styled.p`
      color: var(--white-color);
`
export default withRouter(Footer);
