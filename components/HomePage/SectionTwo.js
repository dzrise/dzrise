import React, {Component} from 'react';
import {Container,Row,Col } from 'react-bootstrap';
import styled from "styled-components";
import TileFeatured from "../Base/TileFeatured";

class SectionTwo extends Component {
    render() {
        let styleSectionTwo = {
            width: '100%',
            backgroundColor: '#111111',

        }
        return (
            <section style={styleSectionTwo}>
                <Container>
                    <Row>
                        <Col md='6'>
                            <div className='mb-5'>
                                <TileFeatured>Обо мне</TileFeatured>
                                <Text>Более 8 лет занимаюсь веб-разработкой.</Text>
                                <Text>В своей работе стараюсь объединить воображение и технологии, чтобы помочь своим клиентам расти в цефровую эпоху.</Text>
                                <Text>В 2020 мир стал другим и уже никогда не будет прежним. Я адаптируюсь. А вы?</Text>
                            </div>

                        </Col>
                        <Col md='6' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img src="/img/dz.png" alt=""/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionTwo;

const Text = styled.p`
      color: var(--white-color);
      font-size: 1rem;
`
