import React, {Component} from 'react';
import Particles from 'react-particles-js';
import SwiperCore, { Pagination, Scrollbar, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

SwiperCore.use([Pagination, Scrollbar]);
class SectionOne extends Component {
    render() {
        let styleSetionOne = {
            width: '100%',
            height: '100vh',
            backgroundColor: '#000000',
        }
        return (
           <section style={styleSetionOne}>
               <Swiper
                   style={{width: '100%',height: '100%'}}
                   spaceBetween={0}
                   slidesPerView={1}
                   pagination={{ clickable: true }}
                   onSlideChange={() => console.log('slide change')}
                   onSwiper={(swiper) => console.log(swiper)}
               >
                   <SwiperSlide>
                       <div className="row"  style={{height: '100%'}}>
                           <div className="col" style={{display: 'flex', alignItems: 'center'}}>
                               <TextInner>
                                   <SlideOneTitle>Получи от своего сайта <span>максимум</span></SlideOneTitle>
                                   <SlideOneSubTitle>Мой ориентир получение реальных<br></br> <span>бизнес-результатов</span> от вашего сайта</SlideOneSubTitle>
                                   <SlideOneBtn>Узнать подробнее</SlideOneBtn>
                               </TextInner>
                           </div>
                           <div className="col"  style={{display: 'flex', alignItems: 'center'}}>
                               <TextInner>
                                <img src="/img/two.png" alt="" style={{display: 'block', maxWidth: '100%'}}/>
                               </TextInner>
                           </div>
                       </div>
                   </SwiperSlide>
                   <SwiperSlide>Slide 2</SwiperSlide>
                   <SwiperSlide>Slide 3</SwiperSlide>
                   <SwiperSlide>Slide 4</SwiperSlide>
               </Swiper>
               <Particles style={{position: 'absolute',top: '0'}} />
           </section>
        )
    }
}
export default SectionOne;
const TextInner = styled.div`
        padding: 0 10%;
`

const SlideOneTitle = styled.h1`
        color: var(--white-color);
        position: relative;
        font-size: 5rem;
        font-weight: 900;
        margin-bottom: 50px;
        > span {
          color:  var(--primary-color);
        }
`
const SlideOneSubTitle = styled.p`
        color: var(--white-color);
        font-size: 1.7rem;
        margin-bottom: 50px;
        > span {
          color:  var(--primary-color);
        }
`
const SlideOneBtn = styled.a`
      color: var(--white-color);
      font-weight: 800;
      padding: 15px 30px;
      position: relative;
      background: none;
      background-clip: padding-box;
      border: 1px solid var(--primary-color);
      border-radius: 25px;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        background-image: linear-gradient(45deg, var(--secondary-color) 15%, var(--primary-color) 65%) !important; 
        color: var(--white-color);
        text-decoration: none;
      }
`
