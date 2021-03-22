import { useRouter } from 'next/router'
import {Container, Row, Col, Nav} from "react-bootstrap";
import style from '../styles/Footer.module.scss'


const Footer: React.FC = (props) => {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault()
        router.push(e.target.getAttribute('href'))
    }
    return (
            <footer className={style.footer}>
                <section>
                    <Container>
                        <Row>
                            <Col sm='3'>
                                <a href="/" onClick={handleClick} className={style.logo}>DzRise Digital</a>
                                <div className={style.copyright}>© Денис Захаров 2020 </div>
                            </Col>
                            <Col sm='3'>
                                <Nav defaultActiveKey="/" className="flex-column">
                                    <Nav.Link href="/" onClick={handleClick}>Главная</Nav.Link>
                                    <Nav.Link href="/portfolio" onClick={handleClick}>Портфолио</Nav.Link>
                                    <Nav.Link href="/services" onClick={handleClick}>Услуги</Nav.Link>
                                    <Nav.Link href="/blog" onClick={handleClick}>Блог</Nav.Link>
                                    <Nav.Link href="/aboutme" onClick={handleClick}>Обо мне</Nav.Link>
                                    <Nav.Link href="/contacts" onClick={handleClick}>Контакты</Nav.Link>
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
export default Footer;
