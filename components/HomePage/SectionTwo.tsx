import {Container,Row,Col } from 'react-bootstrap'
import TileFeatured from '../Base/TitleFeatured'
import style from '../../styles/Home.module.scss'

const SectionTwo: React.FC = () =>  {
        return (
            <section className={style.section_two}>
                <Container>
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
            </section>
        )
}

export default SectionTwo;
