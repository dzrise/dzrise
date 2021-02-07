import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import TileFeatured from "../Base/TileFeatured";


class SectionFour extends Component {
    render() {
        let styleSectionFour = {
            width: '100%',
            backgroundColor: '#040402',

        }
        return (
            <section className="section-black" style={styleSectionFour}>
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
                            <TitleItem>Интернет-магазин на 1с-Битрикс VapeHouse.ru</TitleItem>
                            <Text>Современный, адаптивный интернет-магазин по продаже электронных сигарет.</Text>
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
                            <TitleItem>Лендинг на 1с-Битрикс rcrent.ru</TitleItem>
                            <Text>Лендинг аренды экслюзивных авто в Крыму на 1с-Битрикс.</Text>
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
                            <TitleItem>Сервис валидации QR-кодов vldcode.com</TitleItem>
                            <Text>Простой сервис проверки оригинальности продукции через сканирование QR-кодов.</Text>
                            <Text>Была поставлена задача по защите от подделок экслюзивно импортируемой продукции.
                                Было предложено обклеивать каждый продукт уникальным QR-кодом ведущим на сайт для валидации. Сервис проверки был реализован ан php и MySQL  </Text>
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
}
const TitleItem = styled.h2`
      text-align: center;
      position: relative;
      margin-bottom: 30px;
      padding-bottom: 20px
      font-weight: 900;
      color: #eb760f;
      -webkit-text-fill-color: transparent;
      background: #eb760f;
      background: -moz-linear-gradient(left,#eb760f 0%,#c53f78 100%);
      background: -webkit-gradient(linear,left top,right top,color-stop(0%,#eb760f),color-stop(100%,#c53f78));
      background: -webkit-linear-gradient(left,#eb760f 0%,#c53f78 100%);
      background: -o-linear-gradient(left,#eb760f 0%,#c53f78 100%);
      background: -ms-linear-gradient(left,#eb760f 0%,#c53f78 100%);
      background: linear-gradient(to right,#eb760f 0%,#c53f78 100%);
      background-clip: border-box;
      -webkit-filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eb760f",endColorstr="#c53f78",GradientType=1);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eb760f",endColorstr="#c53f78",GradientType=1);
      -pie-background: linear-gradient(to right,#eb760f,#c53f78);
      -webkit-filter: none �;
      filter: none �;
      -webkit-background-clip: text;
      display: inline-block;
`
const Text = styled.p`
      color:var(--white-color);
      font-size: 1.2rem;
      
`
const SubTitleItem = styled.h3`
        color:var(--white-color);
`
export default SectionFour;
