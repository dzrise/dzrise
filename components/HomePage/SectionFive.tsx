import {Col, Container, Modal, Row} from "react-bootstrap"
import TileFeatured from '../Base/TitleFeatured'
import style from '../../styles/Home.module.scss'
import {useState} from "react";
import FormContact from "../Base/FormContact";

interface IProps {

}

const SectionFive: React.FC<IProps> = ({}: IProps) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className={style.section_five}>
            <Container>
                <Row>
                    <Col>
                        <TileFeatured>
                           Вы готовы?
                        </TileFeatured>
                        <p>Мною движет творчество. Я создаю инновационные вещи, чтобы помочь Вам добиться лучших результатов и закрепиться на рынке.</p>
                        <a className="primary-button" onClick={handleShow}>
                            Связаться
                        </a>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Оставить заявку:</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <FormContact />
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default SectionFive;
