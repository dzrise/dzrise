import {useRouter} from "next/router"
import {useTypedSelector} from "../../hooks/useTypedSelector"
import {useActions} from "../../hooks/useActions"
import {IPost} from "../../types/post"
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchPosts} from "../../store/actions/posts";
import { Container, Row, Col } from 'react-bootstrap';
import BlogLayout from  '../../layouts/blogLayout'
import ArticleBlog from "../../components/Blog/ArticleBlog";

import style from '../../styles/Blog.module.scss'

const Blog = () => {
    const router = useRouter()
    const {posts, error} = useTypedSelector(state => state.posts)
    if (error) {
        return <BlogLayout>
            <Container className={style.blog}>
                <h1>{error}</h1>
            </Container>
        </BlogLayout>
    }

    return (
        <BlogLayout>
            <Container className={style.blog}>
                <Row>
                    <Col md={8}>
                        {posts.map((post: IPost) => <ArticleBlog key={post.slug} data={post}/>)}
                    </Col>
                    <Col md={4}>
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
})
