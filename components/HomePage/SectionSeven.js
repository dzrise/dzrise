import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TileFeatured from "../Base/TileFeatured";

class SectionSeven extends Component {
    render() {
        let styleSectionSeven= {
            width: '100%',
            backgroundColor: '#040402',

        }
        return (
            <section style={styleSectionSeven}>
                <Container>
                    <Row>
                        <Col>
                            <TileFeatured>Последнее в блоге</TileFeatured>

                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
export default SectionSeven;
