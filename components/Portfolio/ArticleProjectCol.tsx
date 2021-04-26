import {IProject} from "../../types/project"
import {Card} from 'react-bootstrap'
import parse from 'html-react-parser'
import Link from 'next/link'
import styles from '../../styles/Portfolio.module.scss'

interface Props {
    data: IProject
}

const ArticleProjectCol: React.FC<Props> = ({data}: Props) => {
    let img = '/img/default-img.png'
    if(data.acf.prev_img) {
        img = data.acf.prev_img.url
    }
    return (
        <>
            <Card bg='dark' border='dark' as="article" className={styles.portfolio_card}>
                <Card.Img src={img} alt={data.title.rendered} title={data.title.rendered} className={styles.portfolio_card__img}/>
                <div className={styles.portfolio_card__tags}>
                {data.displayTags.length > 0 &&
                        data.displayTags.map(tag => {
                            if(typeof tag === "object") {
                                return (
                                    <div>
                                        <img src={tag.acf.img} alt={tag.name}/>
                                    </div>
                                )
                            }else {
                                return ;
                            }

                        })
                }
                </div>
                <Card.Body  className={styles.portfolio_card__body}>
                    <Card.Title>{data.title.rendered}</Card.Title>
                    <Link href={`/portfolio/${data.slug}`}>
                        <a className="primary-button">Подробнее</a>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}
export default ArticleProjectCol;
