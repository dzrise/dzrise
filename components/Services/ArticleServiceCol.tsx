import {IService} from "../../types/service"
import {Row, Col} from 'react-bootstrap'
import parse from 'html-react-parser'
import Link from 'next/link'
import styles from '../../styles/Service.module.scss'

interface Props {
    data: IService
    align: boolean;
}

const ArticleServiceCol: React.FC<Props> = ({data,align}: Props) => {
    let img = '/img/default-img.png'
    if(data.acf.prev_img) {
        img = data.acf.prev_img.url
    }

    let className  = align ? styles.article + ' ' + styles.article_left :  styles.article + ' ' + styles.article_right


    return (
        <Row className={className}>
            <Col md={{span: 4, offset: align ? 0 : 1 }} className={align ? 'order-1': 'order-2'}>
                <img src={img} alt=""/>
                <div className={styles.service_price}>от <span>{data.acf.min_price}</span> руб.</div>
            </Col>
            <Col md={{span: 7, offset: align ? 1 :0 }}  className={align ? 'order-2': 'order-1'}>
                <h2>{data.title.rendered}</h2>
                <div>
                    {parse(data.excerpt.rendered)}
                </div>
            </Col>
        </Row>
    )
}
export default ArticleServiceCol;
