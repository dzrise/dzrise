import {Col, Container, Row} from "react-bootstrap";
import parse from 'html-react-parser'
import TileFeatured from '../Base/TitleFeatured';
import style from '../../styles/Home.module.scss'
import { IService } from "../../types/pages";

interface IProps {
    services: IService;
}

const SectionThree: React.FC<IProps> = ({services}: IProps) => {
        const styleTitle = {
            1: style.title_one,
            2: style.title_two,
            3: style.title_three
        }
        const blockStyle = {
            1: style.section_three__one,
            2:style.section_three__two,
            3:style.section_three__three
        }
     return (
            <section className={style.section_three}>
                <Container>
                    <Row >
                        <Col xs='12'>
                            <TileFeatured>{services.title}</TileFeatured>
                        </Col>
                    </Row>
                    {services.services.length > 0 && services.services.map((item, i) =>
                        <Row key={item.number} className={blockStyle[+item.number]} style={{marginBottom: '150px'}}>
                            <Col sm='4'>
                                <p className={style.int}>{item.number}</p>
                            </Col>
                            <Col sm='8' className={styleTitle[+item.number]}>
                                <h2>{item.title}</h2>
                                <div>{parse(item.text)}</div>
                              <div className={style.section_three__tags}>{item.tags.length > 0 && item.tags.map(tag =>
                                    <span key={tag.name}>{tag.name}</span>
                              )}</div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        )
}
export default SectionThree;
