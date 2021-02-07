import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styled from "styled-components";

import TileFeatured from "../Base/TileFeatured";

class SectionThree extends Component {
    render() {
        let styleSectionThree = {
            width: '100%',
            backgroundColor: '#191919',

        }
        return (
            <section style={styleSectionThree}>
                <Container>
                    <Row  style={{marginBottom: '150px'}}>
                        <Col xs='12'>
                            <TileFeatured>Чем я могу быть полезен?</TileFeatured>
                        </Col>
                    </Row>
                    <Row  style={{marginBottom: '150px'}}>
                        <Col sm='4'>
                            <Int>01</Int>
                        </Col>
                        <Col sm='8'>
                            <TitleOne>Фирменный стиль</TitleOne>
                            <Text style={{textAlign: 'right'}}>Я стараюсь понимать своих клиентов лучше, чем кто-либо, передать сильные стороны вашего бренда в интернете.</Text>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '150px'}}>
                        <Col sm='8'>
                            <h2>
                                <TitleTwo>Цифровой</TitleTwo>
                                <TitleTwo>маркетинг</TitleTwo>
                                <Text>Универсальный подход к каждому клиенту - это  неправильный подход. Я стараюсь предложить вам индивидуальную выигрышную стратегию. Вы хотите расширить свой бизнес? Вам нужно больше потенциальных клиентов и клиентов? Могу помочь с этим.</Text>
                            </h2>
                        </Col>
                        <Col sm='4'  style={{textAlign: 'right'}}>
                            <Int >02</Int>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm='4'>
                            <Int>03</Int>
                        </Col>
                        <Col sm='8'>
                            <TitleThree  style={{textAlign: 'right'}}>
                                Разработка сайтов и приложений
                            </TitleThree>
                            <Text style={{textAlign: 'right'}}>При разработке использую современные технологии, эффективно и профессионально выстраиваю гибкие и масштабируемые бизнес-решения.</Text>
                            <Text style={{textAlign: 'right'}}>1c-Битрикс, Laravel, Python, Wordpress. Opencart, ReactJs, Vue</Text>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const TitleOne = styled.h2`
      font-size: 5rem;
      font-weight: 700;
      color: #61037b;
      -webkit-text-fill-color: transparent;
      background: #61037b;
      background: -moz-linear-gradient(left, #61037b 0%, #b70746 100%);
      background: -webkit-gradient(linear, left top, right top, color-stop(0%, #61037b), color-stop(100%, #b70746));
      background: -webkit-linear-gradient(left, #61037b 0%, #b70746 100%);
      background: -o-linear-gradient(left, #61037b 0%, #b70746 100%);
      background: -ms-linear-gradient(left, #61037b 0%, #b70746 100%);
      background: linear-gradient(to right, #61037b 0%, #b70746 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#61037b", endColorstr="#b70746", GradientType=1);
      -pie-background: linear-gradient(to right, #61037b, #b70746);
      filter: none \\0;
      -webkit-background-clip: text;
      display: inline-block;
      text-transform: uppercase;
      line-height: 1.28;
      padding-bottom: 33px;
      text-align: right;
`
let TitleTwo = styled.span`
      font-size: 5rem;
      color: var(--white-color);
      font-weight: 700;
      position: relative;
      z-index: 9;
      display: inline-block;
      clear: both;
      padding: 0px 10px 0px 7px;
      &:after {
        content: "";
        position: absolute;
        bottom: 6px;
        left: 0;
        width: 100%;
        height: 11px;
        background-image: linear-gradient(45deg, var(--secondary-color) 15%, var(--primary-color) 65%) !important;;
        z-index: -9;
      }
`
let TitleThree = styled.h2`
      font-size: 5rem;
      font-weight: 900;
      color: #eb760f;
      -webkit-text-fill-color: transparent;
      background: #eb760f;
      background: -moz-linear-gradient(left, #eb760f 0%, #c53f78 100%);
      background: -webkit-gradient(linear, left top, right top, color-stop(0%, #eb760f), color-stop(100%, #c53f78));
      background: -webkit-linear-gradient(left, #eb760f 0%, #c53f78 100%);
      background: -o-linear-gradient(left, #eb760f 0%, #c53f78 100%);
      background: -ms-linear-gradient(left, #eb760f 0%, #c53f78 100%);
      background: linear-gradient(to right, #eb760f 0%, #c53f78 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#eb760f", endColorstr="#c53f78", GradientType=1);
      -pie-background: linear-gradient(to right, #eb760f, #c53f78);
      filter: none \\0;
      -webkit-background-clip: text;
      display: inline-block;
`
let Text = styled.p`
    color: var(--white-color);
  font-size: 1.2rem;
`

let Int = styled.div`
      font-size: 15rem;
      font-weight: 700;
      background: var(--primary-color);
      background: -moz-linear-gradient(left, var(--primary-color) 0%,var(--secondary-color) 100%);
      background: -webkit-gradient(linear, left top, right top, color-stop(0%, var(--primary-color)), color-stop(100%,var(--secondary-color)));
      background: -webkit-linear-gradient(left, var(--primary-color) 0%,var(--secondary-color) 100%);
      background: -o-linear-gradient(left, var(--primary-color) 0%,var(--secondary-color) 100%);
      background: -ms-linear-gradient(left, var(--primary-color) 0%,var(--secondary-color) 100%);
      background: linear-gradient(to right, var(--primary-color) 0%,var(--secondary-color) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="var(--primary-color)", endColorstr="#21ad84", GradientType=1);
      -pie-background: linear-gradient(to right, var(--primary-color),var(--secondary-color));
      filter: none \\0;
      color: #ffffff;
      -webkit-background-clip: text;
      -webkit-text-stroke: 3px transparent;
      text-stroke: 3px transparent;
      display: inline-block;
`
export default SectionThree;
