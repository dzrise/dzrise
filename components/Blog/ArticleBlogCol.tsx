import {IPost} from "../../types/post"
import {Card} from 'react-bootstrap'
import parse from 'html-react-parser'
import Link from 'next/link'
import styles from '../../styles/Blog.module.scss'

interface Props {
    data: IPost
}

const ArticleBlogCol: React.FC<Props> = ({data}: Props) => {
    let img = '/img/default-img.png'
    if(data.acf.img_prev) {
        img = data.acf.img_prev.url
    }
    return (
        <Card bg='dark' border='dark' as="article" className={styles.article_col}>
            <Card.Img src={img} alt={data.title.rendered} title={data.title.rendered}/>
            <Card.Body>
                <Card.Title>{data.title.rendered}</Card.Title>
                <Link href={`/blog/${data.slug}`}>
                    <a className="primary-button">Подробнее</a>
                </Link>
            </Card.Body>
        </Card>
    )
}
export default ArticleBlogCol;
