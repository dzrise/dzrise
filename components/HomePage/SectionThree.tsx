import {Col, Container, Row} from "react-bootstrap";
import TileFeatured from '../Base/TitleFeatured';
import style from '../../styles/Home.module.scss'

const SectionThree: React.FC = () => {
     return (
            <section className={style.section_three}>
                <Container>
                    <Row  style={{marginBottom: '150px'}}>
                        <Col xs='12'>
                            <TileFeatured>Чем я могу быть полезен?</TileFeatured>
                        </Col>
                    </Row>
                    <Row  style={{marginBottom: '150px'}}>
                        <Col sm='4'>
                            <p className={style.int}>01</p>
                        </Col>
                        <Col sm='8'>
                            <h2 className={style.title_one}>SPA и PWA приложения</h2>
                            <p  className={style.text} style={{textAlign: 'right'}}>SPA и PWA приложения стали трендом последних лет в мире web-разработки. Данный сайт работает как SPA-приложение c рендерингом на сервере.</p>
                            <p  className={style.text} style={{textAlign: 'right'}}>Laravel, NodeJs, ReactJs, VueJs, NextJs, NuxtJs</p>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '150px'}}>
                        <Col sm='8'>
                            <h2>
                                <h2 className={style.title_two} >Разработка </h2>
                                <h2 className={style.title_two} >на 1C-Bitrix</h2>
                                <p  className={style.text}>Разработка сайтов на самой популярной CMS рунета. На ней запускают проекты крупнейшие российские компании.</p>
                            </h2>
                        </Col>
                        <Col sm='4'  style={{textAlign: 'right'}}>
                            <p className={style.int} >02</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm='4'>
                            <p className={style.int}>03</p>
                        </Col>
                        <Col sm='8'>
                            <h2 className={style.title_three}  style={{textAlign: 'right'}}>Разработка СRM и ERP систем</h2>
                            <p className={style.text} style={{textAlign: 'right'}}>При разработке использую современные технологии, эффективно и профессионально выстраиваю гибкие и масштабируемые бизнес-решения.</p>
                            <p className={style.text} style={{textAlign: 'right'}}>Laravel, NodeJs, ReactJs, VueJs, NextJs, NuxtJs</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}
export default SectionThree;
