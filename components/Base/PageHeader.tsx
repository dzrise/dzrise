import {Iimg} from '../../types/acf'
import {Container} from "react-bootstrap";
import BreadcrumbList from './Breadcrumbs'

interface ILink {
    title: string,
    url: string | boolean
}

interface Props {
    nav: ILink[],
    title: string,
    img: string,
}

const PageHeader: React.FC<Props> = (props: Props) => {
    let img = '/img/default-img.png'
    if(props.img) {
        img = props.img
    }
    return (
        <div className="page_header">
            <img src={img} alt={props.title} title={props.title}/>
            <div className="page_header__inner">
                <Container>
                    <h1>{props.title}</h1>
                    <BreadcrumbList
                        list={props.nav}
                    />
                </Container>
            </div>
        </div>
    )
}
export default PageHeader;
