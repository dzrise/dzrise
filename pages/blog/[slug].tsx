import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import BlogLayout from "../../layouts/blogLayout";
import {Col, Container, Row} from "react-bootstrap";
import {IPost} from "../../types/post";
import ArticlePost from "../../components/Blog/ArticlePost";
import {NextThunkDispatch, wrapper} from "../../store";
import { fetchPost } from "../../store/actions/posts";
import {fetchCategories, fetchCategory} from '../../store/actions/categories'
import {fetchTags} from "../../store/actions/tags";
import PageHeader from '../../components/Base/PageHeader'
import FomrComment from "../../components/Comments/FormComment";
import CategoriesList from "../../components/Blog/CategoriesList";
import TagsWiget from "../../components/Tags/TagsWiget";
import style from "../../styles/Blog.module.scss";
import {fetchComments} from "../../store/actions/comments";
import ListComments from "../../components/Comments/ListComments"
import { useNestComments } from "../../hooks/useNestComments";

const BlogPost: React.FC = () => {
    const router = useRouter()
    const post = useTypedSelector(state => state.posts.posts.find(item => item.slug === router.query.slug))
    const error = useTypedSelector(state => state.posts.error)
    const comments = useTypedSelector( state =>  useNestComments(state.comments.comments.filter(comment => comment.post = post.id)))

    console.log(comments)
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
                            <div className={style.blog_footer}>
                                <h3>Комментарии к посту "{post.title.rendered}"</h3>
                                <div className={style.blog_footer__list}>
                                    {comments.length > 0 &&
                                        <ListComments
                                            comments={comments}
                                        />
                                    }
                                    {comments.length === 0 &&
                                        <p>Нет комментариев</p>
                                    }

                                </div>
                                <div className={style.blog_footer__form}>
                                    <FomrComment
                                        id={post.id}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <aside>
                                <CategoriesList />
                                <TagsWiget />
                            </aside>
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
    await dispatch(await fetchCategories())
    await dispatch(await fetchTags())
    const state = context.store.getState()
    let {id} = state.posts.posts.find(post => post.slug == slug)
    await dispatch(await fetchComments(id))
})
