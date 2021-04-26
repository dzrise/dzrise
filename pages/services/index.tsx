import {useTypedSelector} from "../../hooks/useTypedSelector"
import {IService} from "../../types/service"
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchServices} from "../../store/actions/services";
import { Container, Row, Col } from 'react-bootstrap';
import ArticleServiceCol from "../../components/Services/ArticleServiceCol";
import PageHeader from '../../components/Base/PageHeader'
import ServiceLayout from "../../layouts/serviceLayout";
import style from '../../styles/Service.module.scss'

const Blog = () => {
    const {services, error} = useTypedSelector(state => state.services)

    let fon = '/img/default-service-fon.jpeg'

    const globalService = services.filter(s => s.acf.global === true).sort((a, b) => a.acf.sort - b.acf.sort)

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'Услуги', url: false}
    ]

    if (error) {
        return <ServiceLayout>
            <PageHeader
                title="Услуги"
                img={fon}
                nav={nav}
            />
            <Container>
                <h1>{error}</h1>
            </Container>
        </ServiceLayout>
    }

    return (
        <ServiceLayout >
            <PageHeader
                title="Услуги"
                img={fon}
                nav={nav}
            />
            <Container fluid className={style.service_inner}>
                <Row>
                        {globalService.length > 0 &&
                            globalService.map((service: IService, i) => <Col md={12}><ArticleServiceCol align={i % 2 === 0} key={service.slug} data={service}/></Col>)
                        }
                        {services.length === 0 &&
                            <Col><p>Пока нет услуг</p></Col>
                        }
                </Row>
            </Container>
        </ServiceLayout>
    )
}
export default Blog;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchServices())
})
