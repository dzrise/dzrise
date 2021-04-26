import {IService} from "../../types/service"
import parse from 'html-react-parser'
import styles from '../../styles/Service.module.scss'

interface Props {
    data: IService;
}

const ArticleService: React.FC<Props> = ({data, align}: Props) => {

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
export default ArticleService;
