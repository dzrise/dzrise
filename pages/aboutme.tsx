import Default from  '../layouts/default'
import {Col, Container, Row} from "react-bootstrap";
import TileFeatured from "../components/Base/TitleFeatured";
import style from "../styles/Aboutme.module.scss";
import PageHeader from "../components/Base/PageHeader";
import PortfolioLayout from "../layouts/portfolioLayout";


const Aboutme: React.FC = () =>  {
    let fon = '/img/default-aboutus-fon.jpeg'

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'О нас', url: false}
    ]
    return (
        <>
            <Default>
                <PageHeader
                    title="О нас"
                    img={fon}
                    nav={nav}
                />
                <Container className={style.page}>
                    <Row>
                        <Col md='6'>
                            <div className='mb-5'>
                                <TileFeatured>Обо мне</TileFeatured>
                                <p className={style.text}>Более 8 лет занимаюсь веб-разработкой.</p>
                                <p className={style.text}>В своей работе стараюсь объединить воображение и технологии, чтобы помочь своим клиентам расти в цефровую эпоху.</p>
                                <p className={style.text}>В 2020 мир стал другим и уже никогда не будет прежним. Я адаптируюсь. А вы?</p>
                            </div>
                        </Col>
                        <Col md='6' className={style.photo}>
                            <img src="/img/dz.png" alt=""/>
                        </Col>
                    </Row>
                </Container>
            </Default>
        </>
    )
}
export default Aboutme;
