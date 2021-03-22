import Particles from 'react-particles-js';
import SwiperCore, { Pagination, Scrollbar, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../styles/Home.module.scss'

SwiperCore.use([Pagination, Scrollbar]);

const  SectionOne: React.FC = () => {
        return (
           <section className={style.section_one}>
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
                               <div className={style.inner_text}>
                                   <h1 className={style.title}>Получи от своего сайта <span>максимум</span></h1>
                                   <p className={style.sub_title}>Мой ориентир получение реальных<br></br> <span>бизнес-результатов</span> от вашего сайта</p>
                                   <a className={style.section_one_btn}>Узнать подробнее</a>
                               </div>
                           </div>
                           <div className="col"  style={{display: 'flex', alignItems: 'center'}}>
                               <div className={style.inner_text}>
                                <img src="/img/two.png" alt="" style={{display: 'block', maxWidth: '100%'}}/>
                               </div>
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
export default SectionOne;
