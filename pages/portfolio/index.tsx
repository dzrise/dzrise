import {useTypedSelector} from "../../hooks/useTypedSelector"
import {IProject} from "../../types/project"
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchProjects} from "../../store/actions/projects";
import {fetchCategories} from  '../../store/actions/categories'
import {fetchTags} from  '../../store/actions/tags'
import {fetchProjectTypes} from  '../../store/actions/projectTypes'
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioLayout from  '../../layouts/portfolioLayout'
import ArticleProjectCol from "../../components/Portfolio/ArticleProjectCol";
import PageHeader from '../../components/Base/PageHeader'
import ProjectTypes from '../../components/Portfolio/ProjectTypes'
import style from '../../styles/Portfolio.module.scss'

const Portfolio = () => {
    const projects = useTypedSelector(state => state.projects.projects)
    const projectError = useTypedSelector(state => state.projects.error)
    const tags = useTypedSelector(state => state.tags.tags)
    const tagsError = useTypedSelector(state => state.tags.error)
    const projectTypes = useTypedSelector(state => state.projectTypes.projectTypes)
    const projectTypesError = useTypedSelector(state => state.projectTypes.error)
    const activeProjectType = useTypedSelector(state => state.projectTypes.active)

    let fon = '/img/default-portfolio-fon.jpeg'

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'Портфолио', url: false}
    ]


    let displayProject = projects.map(project => {
        if(project.tags.length > 0){
            project['displayTags'] = project.tags.map(tag => tags.find(t=> t.id === tag))
        } else {
            project['displayTags'] = []
        }
        return project
    })

    if(activeProjectType !== 0 ){
        displayProject =  displayProject.filter(p => p.portfoliotype.indexOf(activeProjectType) != -1)
    }

    if (projectError || tagsError || projectTypesError) {
        return <PortfolioLayout>
            <PageHeader
                title="Портфолио"
                img={fon}
                nav={nav}
            />
            <Container className={style.portfolio_inner}>
                <h1>Что-то пошло не так</h1>
            </Container>
        </PortfolioLayout>
    }

    return (
        <PortfolioLayout >
            <PageHeader
                title="Портфолио"
                img={fon}
                nav={nav}
            />
            <Container fluid className={style.portfolio_inner}>
                <Row>
                    <Col xs={12}>
                        <h2>Что я делал</h2>
                    </Col>
                    <Col>
                        <ProjectTypes
                            data={projectTypes}
                            active={activeProjectType}
                        />
                    </Col>
                </Row>
                <Row>
                    {displayProject.length > 0 &&
                        displayProject.map((project: IProject) => <Col key={project.id} md={3}><ArticleProjectCol data={project}/></Col>)
                    }
                    {displayProject.length === 0 &&
                        <Col><p className="text-center">Пока нет проектов</p></Col>
                    }
                </Row>
            </Container>
        </PortfolioLayout>
    )
}
export default Portfolio;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchProjects())
    await dispatch(await fetchCategories())
    await dispatch(await fetchTags())
    await dispatch(await fetchProjectTypes())
})
