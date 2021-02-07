import React, {Component} from 'react';
import styled from 'styled-components';
import SwiperCore, { Pagination, Scrollbar, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TileFeatured from "../Base/TileFeatured";
import {Col, Container, Row} from "react-bootstrap";

SwiperCore.use([Pagination, Scrollbar]);

class SectionFive extends Component {
    render() {
        let styleSectionFive = {
            width: '100%',
            backgroundColor: '#111111',

        }
        return (
            <section className="section-black section-sertificate" style={styleSectionFive}>
                <Container>
                    <Row style={{marginBottom: '100px'}}>
                        <Col> <TileFeatured >Сертификаты 1C-Битрикс</TileFeatured></Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Swiper
                        style={{width: '100%',height: '100%',marginBottom: '150px'}}
                        spaceBetween={50}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 40
                            }
                        }}
                        centeredSlides={false}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><a href="/pdf/certificate/Интеграция с 1С».pdf" target='_blank'><img src="/img/certificate/Интеграция с 1С.png" alt="Интеграция с 1С"/></a></SwiperSlide>
                        <SwiperSlide><a href="/pdf/certificate/Администратор. Бизнес.pdf" target='_blank'><img src="/img/certificate/Администратор. Бизнесс.png" alt="Администратор Бизнесс"/></a></SwiperSlide>
                        <SwiperSlide><a href="/pdf/certificate/Администратор. Модули.pdf" target='_blank'><img src="/img/certificate/Администратор. Модули.png" alt="Администратор Модули"/></a></SwiperSlide>
                        <SwiperSlide><a href="/pdf/certificate/Администратор. Базовый.pdf" target='_blank'><img src="/img/certificate/Администратор. Базовый.png" alt="Администратор Базовый"/></a></SwiperSlide>
                        <SwiperSlide><a href="/pdf/certificate/Установка и настройка».pdf" target='_blank'><img src="/img/certificate/Установка и настройка.png" alt="Установка и настройка"/></a></SwiperSlide>
                        <SwiperSlide><a href="/pdf/certificate/Продвижение сайта и Маркетинг.pdf" target='_blank'><img src="/img/certificate/Продвижение сайта и Маркетинг.jpg" alt="Sql Certificate"/></a></SwiperSlide>
                        <SwiperSlide><a href="/pdf/certificate/Контент-менеджер.png" target='_blank'><img src="/img/certificate/Контент-менеджер.png" alt="Sql Certificate"/></a></SwiperSlide>
                    </Swiper>
                </Container>
                <Container>
                    <Row style={{marginBottom: '100px'}}>
                        <Col> <TileFeatured >Сертификаты SoloLearn</TileFeatured></Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Swiper
                        style={{width: '100%',height: '100%'}}
                        spaceBetween={50}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            },
                            1024: {
                            slidesPerView: 5,
                            spaceBetween: 40
                        }
                        }}
                        centeredSlides={false}
                        loop={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><a href="#"><img src="/img/certificate/html-min.jpg" alt="Html Certificate"/></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="/img/certificate/css-min.jpg" alt="Css Certificate"/></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="/img/certificate/jQuery-min.jpg" alt="jQuery Certificate"/></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="/img/certificate/Javascript-min.jpg" alt="Sql Certificate"/></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="/img/certificate/php-min.jpg" alt="Php Certificate"/></a></SwiperSlide>
                        <SwiperSlide><a href="#"><img src="/img/certificate/sql-min.jpg" alt="Sql Certificate"/></a></SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        )
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`https://api.dzrise.ru/sliders/1`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            bitrixSlider: data
        },
    }
}

export default SectionFive;
