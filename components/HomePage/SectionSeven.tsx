import {Col, Container, Row, Form} from "react-bootstrap";
import TileFeatured from '../Base/TitleFeatured'
import FormContact from "../Base/FormContact"
import PhoneSvg from '../../svg/phone.svg'
import TelegramSvg from '../../svg/telegram.svg'
import WaSvg from '../../svg/wa.svg'
import Email from '../../svg/email.svg'
import style from '../../styles/Home.module.scss'

const SectionSeven: React.FC = () => {
        return (
            <section className={style.section_seven}>
                <Container>
                    <Row>
                        <Col md={{span: 6}}>
                            <TileFeatured>Оставить заявку:</TileFeatured>
                            <FormContact />
                        </Col>
                        <Col md={{span: 6}} className="d-flex justify-content-center align-items-center">
                            <div className="d-inline-flex flex-column">
                                <div className={style.contact}>
                                    <PhoneSvg /> <a href="tel://+79057450059">+7(905) 745 00 59</a>
                                </div>
                                <div className={style.contact}>
                                    <TelegramSvg /> <a href="https://telegram.me/share/url?url=@dzrise">@dzrise</a>
                                </div>
                                <div className={style.contact}>
                                    <WaSvg /> <a href="tel://+79057450059">+7(903) 583 69 38</a>
                                </div>
                                <div className={style.contact}>
                                    <Email /> <a href="mailto:sale@dzrise.ru">sale@dzrise.ru</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}
export default SectionSeven;
