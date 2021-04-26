import {useRouter} from 'next/router'
import { IPost } from "../../types/post";
import ArticleBlogCol from "./ArticleBlogCol";
import {Row, Col} from 'react-bootstrap'
interface IProps {
    name: 'string'
    category: number,
    posts: IPost[]
}
const CategoriesListItems: React.FC<IProps> = ({category, posts, name}: IProps) => {
    const router = useRouter()
    const goTo = (e) => {
        e.preventDefault()
        router.push(e.target.attributes.href.value)
    }
    return (
        <>
            <h2 className="title_future">{name}</h2>
            <Row>

                {posts.length > 0 &&
                posts.map(post => <Col md={6}><ArticleBlogCol data={post} /></Col>)
                }
                {posts.length === 0 &&
                    <p>Извините в данной категории пока нет постов</p>
                }
            </Row>
        </>

    )
}
export default CategoriesListItems;
