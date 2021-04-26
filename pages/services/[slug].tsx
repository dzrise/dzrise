import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import BlogLayout from "../../layouts/blogLayout";
import {Col, Container, Row} from "react-bootstrap";
import style from "../../styles/Blog.module.scss";
import {IPost} from "../../types/post";
import ArticlePost from "../../components/Blog/ArticlePost";
import {NextThunkDispatch, wrapper} from "../../store";
import { fetchPost } from "../../store/actions/posts";
import PageHeader from '../../components/Base/PageHeader'
import styles from "../../styles/Blog.module.scss";

const BlogPost: React.FC = () => {
    const router = useRouter()
    const post = useTypedSelector(state => state.posts.posts.find(item => item.slug === router.query.slug))
    const error = useTypedSelector(state => state.posts.error)

    let fon = '/img/default-blog-fon.jpeg'
    if(post.acf.img_fon){
        fon = post.acf.img_fon.url
    }

    const nav = [
        {title: 'Главная', url: '/'},
        {title: 'Блог', url: '/blog'},
        {title: post.title.rendered, url: false}
    ]

    if (error) {
        return <BlogLayout>
            <Container className={style.blog}>
                <h1>{error}</h1>
            </Container>
        </BlogLayout>
    }

    return (
        <BlogLayout>
                <PageHeader
                    title={post.title.rendered}
                    img={fon}
                    nav={nav}
                />
                <Container className={style.blog_inner}>
                    <Row>
                        <Col md={8}>
                            <ArticlePost
                                data={post}
                            />
                        </Col>
                        <Col md={4}>
                        </Col>
                    </Row>
                </Container>
        </BlogLayout>
    )
}
export default BlogPost;

export const getServerSideProps = wrapper.getServerSideProps(async ( context) => {
    const slug  = context.query.slug;
    const dispatch = context.store.dispatch as NextThunkDispatch
     await dispatch(await fetchPost(slug))
})
