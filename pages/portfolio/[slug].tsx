import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import PortfolioLayout from "../../layouts/portfolioLayout";
import {Col, Container, Row} from "react-bootstrap";
import style from "../../styles/Blog.module.scss";
import {IProject} from "../../types/post";
import ArticleProject from "../../components/Portfolio/ArticleProject";
import {NextThunkDispatch, wrapper} from "../../store";
import { fetchProject } from "../../store/actions/projects";
import PageHeader from '../../components/Base/PageHeader'
import styles from "../../styles/Portfolio.module.scss";

const Project: React.FC = () => {
    const router = useRouter()
    const project = useTypedSelector(state => state.projects.projects.find(item => item.slug === router.query.slug))
    const error = useTypedSelector(state => state.projects.error)

    let fon = '/img/default-portfolio-fon.jpeg'
    if(project.acf.img_fon){
        fon = project.acf.img_fon.url
    }

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'Портфолио', url: '/portfolio'},
        {title: project.title.rendered, url: false}
    ]



    if (error) {
        return <PortfolioLayout>
            <PageHeader
                title={project.title.rendered}
                img={fon}
                nav={nav}
            />
            <Container className={style.blog}>
                <h1>{error}</h1>
            </Container>
        </PortfolioLayout>
    }

    return (
        <PortfolioLayout>
                <PageHeader
                    title={project.title.rendered}
                    img={fon}
                    nav={nav}
                />
                <Container className={style.blog_inner}>
                    <Row>
                        <Col md={8}>
                            <ArticleProject
                                data={project}
                            />
                        </Col>
                        <Col md={4}>
                        </Col>
                    </Row>
                </Container>
        </PortfolioLayout>
    )
}
export default Project;

export const getServerSideProps = wrapper.getServerSideProps(async ( context) => {
    const slug  = context.query.slug;
    const dispatch = context.store.dispatch as NextThunkDispatch
     await dispatch(await fetchProject(slug))
})
