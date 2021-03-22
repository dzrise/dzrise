import { useRouter } from 'next/router'
import { Navbar,Container,Nav } from 'react-bootstrap';
import style from '../styles/Header.module.scss'

const Header: React.FC = () => {
    const router = useRouter()
    const handleClick = (e: MouseEvent) => {
        e.preventDefault()
        router.push(e.target.getAttribute('href'))
    }
    return (
            <header className={style.header}>
                <Navbar expand="lg" variant="dark" className={style.navbar}>
                    <Container>
                        <Navbar.Brand href="/" onClick={handleClick} >DzRise Digital</Navbar.Brand>
                        <div className="ml-auto"></div>
                        <Nav>
                            <Nav.Link href="/" onClick={handleClick}>Главная</Nav.Link>
                            <Nav.Link href="/portfolio" onClick={handleClick}>Портфолио</Nav.Link>
                            <Nav.Link href="/services" onClick={handleClick}>Услуги</Nav.Link>
                            <Nav.Link href="/blog" onClick={handleClick}>Блог</Nav.Link>
                            <Nav.Link href="/aboutme" onClick={handleClick}>Обо мне</Nav.Link>
                            <Nav.Link href="/contacts" onClick={handleClick}>Контакты</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/"><i className="icon-magnifier" /></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
    )
}

export default Header;
