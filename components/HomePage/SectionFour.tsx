import {Col, Container, Row} from "react-bootstrap"
import TileFeatured from '../Base/TitleFeatured'

import style from '../../styles/Home.module.scss'


const SectionFour: React.FC = () => {
        return (
            <section className={style.section_four +  ' section-black'}>
                <Container>
                    <Row>
                        <Col xs='12' style={{marginBottom: '150px'}}>
                            <TileFeatured >Мои работы: </TileFeatured>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '150px'}}>
                        <Col sm='4'>
                            <img src="/img/portfolio/vh/vapehose.png" alt="Интернет-магазин на 1с-Битрикс VapeHouse.ru"/>
                        </Col>
                        <Col sm='8'>
                            <h2  className={style.title}>Интернет-магазин на 1с-Битрикс VapeHouse.ru</h2>
                            <p className={style.text}>Современный, адаптивный интернет-магазин по продаже электронных сигарет.</p>
                           <Row className="justify-content-center align-items-center">
                               <Col>
                               </Col>
                               <Col>
                               </Col>
                               <Col>
                               </Col>
                               <Col >
                                   <img src="/img/svg/bitrix_logo.svg" alt="1c-Битрикс" style={{width:'auto',height: '50px',display: 'block', margin: '0 auto'}}/>
                               </Col>
                               <Col>
                                   <img src="/img/svg/1C_logo.svg" alt="Интеграция с 1С" style={{width:'auto',height: '50px', display: 'block', margin: '0 auto'}}/>
                               </Col>
                               <Col>
                                   <img src="/img/svg/JQuery-Logo.svg" alt="jQuery" style={{width:'auto',height: '50px', display: 'block', margin: '0 auto'}}/>
                               </Col>
                           </Row>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '150px'}}>
                        <Col sm='8'>
                            <h2  className={style.title}>Лендинг на 1с-Битрикс rcrent.ru</h2>
                            <p className={style.text}>Лендинг аренды экслюзивных авто в Крыму на 1с-Битрикс.</p>
                            <Row className="justify-content-center align-items-center">
                                <Col >
                                    <img src="/img/svg/bitrix_logo.svg" alt="1c-Битрикс" style={{width:'auto',height: '50px',display: 'block', margin: '0 auto'}}/>
                                </Col>
                                <Col>
                                    <img src="/img/svg/JQuery-Logo.svg" alt="jQuery" style={{width:'auto',height: '50px', display: 'block', margin: '0 auto'}}/>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm='4'>
                            <img src="/img/portfolio/rcrent/rent.png" alt=""/>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '150px'}}>
                        <Col sm='4'>
                            <img src="/img/portfolio/vldcode/vldcode.png" alt="Интернет-магазин на 1с-Битрикс VapeHouse.ru"/>
                        </Col>
                        <Col sm='8'>
                            <h2 className={style.title}>Сервис валидации QR-кодов vldcode.com</h2>
                            <p className={style.text}>Простой сервис проверки оригинальности продукции через сканирование QR-кодов.</p>
                            <p className={style.text}>Была поставлена задача по защите от подделок экслюзивно импортируемой продукции.
                                Было предложено обклеивать каждый продукт уникальным QR-кодом ведущим на сайт для валидации. Сервис проверки был реализован ан php и MySQL  </p>
                            <Row className="justify-content-center align-items-center">
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col >
                                    <img src="/img/svg/PHP Logo.svg" alt="1c-Битрикс" style={{width:'auto',height: '50px',display: 'block', margin: '0 auto'}}/>
                                </Col>
                                <Col>
                                    <img src="/img/svg/mysql.svg" alt="Интеграция с 1С" style={{width:'auto',height: '50px', display: 'block', margin: '0 auto'}}/>
                                </Col>
                                <Col>
                                    <img src="/img/svg/JQuery-Logo.svg" alt="jQuery" style={{width:'auto',height: '50px', display: 'block', margin: '0 auto'}}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}
export default SectionFour;
