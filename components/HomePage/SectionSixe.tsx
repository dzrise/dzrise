import {Col, Container, Row} from "react-bootstrap";
import TileFeatured from '../Base/TitleFeatured'
import style from '../../styles/Home.module.scss'

const SectionSixe: React.FC = () => {
        return (
            <section className={style.section_sixe}>
                <Container>
                    <Row>
                        <Col>
                            <TileFeatured>Отзывы и благодарности</TileFeatured>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
}
export default SectionSixe;
