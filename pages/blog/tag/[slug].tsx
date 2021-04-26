import {useRouter} from "next/router"
import {useTypedSelector} from "../../../hooks/useTypedSelector"
import {IPost} from "../../../types/post"
import {NextThunkDispatch, wrapper} from "../../../store";
import {fetchPosts} from "../../../store/actions/posts";
import {fetchCategories} from  '../../../store/actions/categories'
import { Container, Row, Col } from 'react-bootstrap';
import BlogLayout from  '../../../layouts/blogLayout'
import ArticleBlog from "../../../components/Blog/ArticleBlog";
import PageHeader from '../../../components/Base/PageHeader'
import CategoriesList from "../../../components/Blog/CategoriesList";
import style from '../../../styles/Blog.module.scss'

const BlogTag = () => {
    const router = useRouter()
    const categories = useTypedSelector(state => state.categories.categories)
    const category = useTypedSelector(state => state.categories.categories.find(c => c.slug == router.query.slug))
    const categoriesError = useTypedSelector(state => state.categories.error)
    const posts = useTypedSelector(state => state.posts.posts.filter(p => p.categories.indexOf(category.id) != -1))
    const postsError = useTypedSelector(state => state.posts.error)

    let fon = '/img/default-blog-fon.jpeg'

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'Блог', url: '/blog'},
        {title: 'Теги', url: '/blog/tag'},
        {title: category.name, url: false}
    ]

    if (postsError || categoriesError) {
        return <BlogLayout>
            <Container className={style.blog}>
                <h1>{error}</h1>
            </Container>
        </BlogLayout>
    }

    return (
        <BlogLayout >
            <PageHeader
                title={category.name}
                img={fon}
                nav={nav}
            />
            <Container className={style.blog_inner}>
                <Row>
                    <Col>
                        {category.description}
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        {posts.length > 0 &&
                            posts.map((post: IPost) => <ArticleBlog key={post.slug} data={post}/>)
                        }
                        {posts.length === 0 &&
                            <h2>В данной категории пока нет постов</h2>
                        }
                    </Col>
                    <Col md={4}>
                        <aside>
                            <CategoriesList
                                categories={categories}
                            />
                        </aside>
                    </Col>
                </Row>
            </Container>
        </BlogLayout>
    )
}
export default BlogCategory;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
    await dispatch(await fetchCategories())
})
