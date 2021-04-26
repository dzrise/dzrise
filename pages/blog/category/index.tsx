import {useTypedSelector} from "../../../hooks/useTypedSelector"
import {NextThunkDispatch, wrapper} from "../../../store";
import {fetchPosts} from "../../../store/actions/posts";
import {fetchCategories} from  '../../../store/actions/categories'
import { Container, Row, Col } from 'react-bootstrap';
import BlogLayout from  '../../../layouts/blogLayout'
import PageHeader from '../../../components/Base/PageHeader'
import CategoriesList from "../../../components/Blog/CategoriesList";
import CategoriesListItems from "../../../components/Blog/CategoriesListItems";
import style from '../../../styles/Blog.module.scss'

const BlogCategories = () => {
    const categories = useTypedSelector(state => state.categories.categories)
    const categoriesError = useTypedSelector(state => state.categories.error)
    const posts = useTypedSelector(state => state.posts.posts)
    const postsError = useTypedSelector(state => state.posts.error)

    let displayPosts = []
    for (const category of categories) {
        displayPosts[category.id]= []
        displayPosts[category.id]['posts'] = posts.filter(post => post.categories.indexOf(category.id) != -1)
    }

    let fon = '/img/default-blog-fon.jpeg'

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'Блог', url: '/blog'},
        {title: 'Категории', url: false},
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
                title="Категории"
                img={fon}
                nav={nav}
            />
            <Container className={style.blog_inner}>
                <Row>
                    <Col md={8}>
                        {categories.map((category) => {
                                return (
                                    <div className="mb-5 mt-5">
                                        <CategoriesListItems
                                            name={category.name}
                                            category={category.id}
                                            posts={displayPosts[category.id]['posts']}
                                        />
                                    </div>
                            )}
                        )}
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
export default BlogCategories;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
    await dispatch(await fetchCategories())
})
