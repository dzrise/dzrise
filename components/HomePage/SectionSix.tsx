import {Col, Container, Row} from "react-bootstrap";
import TileFeatured from '../Base/TitleFeatured'
import {IPost} from "../../types/post";
import style from '../../styles/Home.module.scss'
import ArticleBlogCol from "../Blog/ArticleBlogCol";

interface IProps {
    lastPosts: IPost[];
}

const SectionSix: React.FC<IProps> = ({lastPosts}) => {

        return (
            <section className={style.section_six}>
                <Container>
                    <Row>
                        <Col>
                            <TileFeatured>Последнее в блоге</TileFeatured>
                        </Col>

                    </Row>
                    <Row>
                        {lastPosts.length > 0 && lastPosts.map(item =>
                            <Col md={4} key={item.id}>
                                <ArticleBlogCol data={item}/>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        )
}
export default SectionSix;
