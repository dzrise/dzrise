import {Col, Container, Row} from "react-bootstrap"
import TileFeatured from '../Base/TitleFeatured'
import { IPortfolio } from "../../types/page"
import Tag from "../Base/Tag";
import style from '../../styles/Home.module.scss'

interface IProps {
    portfolio: IPortfolio
}

const SectionFour: React.FC<IProps> = ({portfolio}: IProps) => {
        return (
            <section className={style.section_four +  ' section-black'}>
                <Container>
                    <Row>
                        <Col xs='12'>
                            <TileFeatured >{portfolio.title}</TileFeatured>
                        </Col>
                    </Row>
                    {portfolio.items.map((item, i ) =>
                        <Row key={i} className={style.portfolio_item}>
                            <Col sm='4'>
                                <img src={item.img} alt={item.title}/>
                            </Col>
                            <Col sm='8'>
                                <h2  className={style.title}>{item.title}</h2>
                                <p className={style.text}>{item.title}</p>
                                <Row className="justify-content-center align-items-center">
                                    {item.tags.length > 0 && item.tags.map((tag, index) =>
                                        <Col key={index} className={style.tags}>
                                            <Tag id={tag} />
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        )
}
export default SectionFour;
