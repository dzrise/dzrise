import {IPost} from "../../types/post"
import parse from 'html-react-parser'
import Link from 'next/link'
import * as moment from 'moment';
import styles from '../../styles/Blog.module.scss'

interface Props {
  data: IPost
}

const ArticleBlog: React.FC<Props> = ({data}: Props) => {
    let img = '/img/default-img.png'
    if(data.acf.img_prev) {
        img = data.acf.img_prev.url
    }
    return (
        <article className={styles.article_pre}>
            <div className={styles.article_pre__img}>
                <img src={img} alt={data.title.rendered} title={data.title.rendered}/>
            </div>
            <div className={styles.article_pre__body}>
                <h2>{data.title.rendered}</h2>
                {parse(data.excerpt.rendered)}
            </div>
            <div className={styles.article_pre__footer}>
                <div>
                    {moment(data.date).format('DD/MM/YYYY')}
                </div>
                <Link href={`/blog/${data.slug}`}>
                    <a className="primary-button">Подробнее</a>
                </Link>
            </div>
        </article>
    )
}
export default ArticleBlog;
