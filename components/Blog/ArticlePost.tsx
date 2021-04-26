import {IPost} from "../../types/post"
import parse from 'html-react-parser'
import * as moment from 'moment';
import styles from '../../styles/Blog.module.scss'

interface Props {
    data: IPost
}

const ArticlePost: React.FC<Props> = ({data}: Props) => {

    return (
        <article className={styles.article}>
            <div className={styles.article_body}>
                {parse(data.content.rendered)}
            </div>
            <div className={styles.article_footer}>
                <div>
                    {moment(data.date).format('DD/MM/YYYY')}
                </div>
            </div>
        </article>
    )
}
export default ArticlePost;
