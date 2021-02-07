import React, {Component} from 'react';
import TileFeatured from "../Base/TileFeatured";
import {Col, Container, Row} from "react-bootstrap";

class SectionSixe extends Component {
    render() {
        let styleSectionSixe= {
            width: '100%',
            backgroundColor: '#191919',

        }
        return (
            <section style={styleSectionSixe}>
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
}
export default SectionSixe;
