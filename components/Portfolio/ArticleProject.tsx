import {IProject} from "../../types/project"
import parse from 'html-react-parser'
import * as moment from 'moment';
import styles from '../../styles/Portfolio.module.scss'

interface Props {
    data: IProject
}

const ArticleProject: React.FC<Props> = ({data}: Props) => {

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
export default ArticleProject;
