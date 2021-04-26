import {useTypedSelector} from "../../hooks/useTypedSelector"
import {IPost} from "../../types/post"
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchPosts} from "../../store/actions/posts";
import {fetchCategories} from  '../../store/actions/categories'
import {fetchTags} from "../../store/actions/tags";
import { Container, Row, Col } from 'react-bootstrap';
import BlogLayout from  '../../layouts/blogLayout'
import ArticleBlog from "../../components/Blog/ArticleBlog";
import PageHeader from '../../components/Base/PageHeader'
import style from '../../styles/Blog.module.scss'
import CategoriesList from "../../components/Blog/CategoriesList";
import TagsWiget from "../../components/Tags/TagsWiget";

const Blog = () => {
    const {posts, error} = useTypedSelector(state => state.posts)

    let fon = '/img/default-blog-fon.jpeg'

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'Блог', url: false}
    ]

    if (error) {
        return <BlogLayout>
            <Container className={style.blog}>
                <h1>{error}</h1>
            </Container>
        </BlogLayout>
    }

    return (
        <BlogLayout >
            <PageHeader
                title="Блог"
                img={fon}
                nav={nav}
            />
            <Container className={style.blog_inner}>
                <Row>
                    <Col md={8}>
                        {posts.map((post: IPost) => <ArticleBlog key={post.slug} data={post}/>)}
                    </Col>
                    <Col md={4}>
                        <aside>
                            <CategoriesList/>
                            <TagsWiget />
                        </aside>
                    </Col>
                </Row>
            </Container>
        </BlogLayout>
    )
}
export default Blog;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
    await dispatch(await fetchCategories())
    await dispatch(await fetchTags())

})
