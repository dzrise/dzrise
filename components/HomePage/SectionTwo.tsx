import parse from 'html-react-parser'
import {Container,Row,Col } from 'react-bootstrap'
import TileFeatured from '../Base/TitleFeatured'
import style from '../../styles/Home.module.scss'
import { IAboutMeItem } from "../../types/page";

interface IProps {
    aboutMe: IAboutMeItem
}

const SectionTwo: React.FC<IProps> = ({aboutMe}: IProps) =>  {
        return (
            <section className={style.section_two}>
                <Container>
                    <Row>
                        <Col md='6'>
                            <div className='mb-5'>
                                <TileFeatured>{aboutMe.about_me_tilte}</TileFeatured>
                                <div>
                                    {parse(aboutMe.about_me_text)}
                                </div>
                            </div>
                        </Col>
                        <Col md='6' className={style.photo}>
                            <img src={aboutMe.about_me_img} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}

export default SectionTwo;
