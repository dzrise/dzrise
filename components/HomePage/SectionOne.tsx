import Particles from 'react-particles-js';
import {Row, Col } from 'react-bootstrap'
import parse from 'html-react-parser'
import { ITopBannerSlide }  from '../../types/page'
import SwiperCore, { Pagination, Scrollbar, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../styles/Home.module.scss'

SwiperCore.use([Pagination, Scrollbar]);

interface IProps {
    banner: ITopBannerSlide[]
}

const  SectionOne: React.FC<IProps> = ({banner}: IProps) => {
    return (
           <section className={style.section_one}>
               <Swiper
                   style={{width: '100%',height: '100%'}}
                   spaceBetween={0}
                   slidesPerView={1}
                   pagination={{ clickable: true }}
               >
                   {banner.map((slide, i) => {
                      return(
                          <SwiperSlide key={i.toString()}>
                              <Row className={style.section_one__row } style={{height: '100%'}}>
                                  <Col xs={12} md={6} className={style.section_one__col}>
                                      <div className={style.inner_text}>
                                          <h1 className={style.title}>{parse(slide.title)}</h1>
                                          <p className={style.sub_title}>{parse(slide.subtitle)}</p>
                                          {slide.btn &&
                                            <a className={style.section_one_btn} href={slide.btn_link}>{slide.btn_text}</a>
                                          }
                                      </div>
                                  </Col>
                                  <Col xs={12} md={6} className={style.section_one__col}>
                                      <div className={style.inner_text}>
                                          <img className={style.section_one__img} src={slide.img} alt={slide.title} style={{display: 'block', maxWidth: '100%'}}/>
                                      </div>
                                  </Col>
                              </Row>
                          </SwiperSlide>
                      )
                   })}
               </Swiper>
               <Particles style={{position: 'absolute',top: '0'}} />
           </section>
        )
}
export default SectionOne;
