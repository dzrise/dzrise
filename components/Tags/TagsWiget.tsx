import {useRouter} from 'next/router'
import Nav from 'react-bootstrap/Nav'
import {useTypedSelector} from "../../hooks/useTypedSelector"
import style from "../../styles/Blog.module.scss";

const TagsWiget: React.FC = () => {
    const tags = useTypedSelector(state => state.tags.tags)
    const router = useRouter()
    const goTo = (e) => {
        e.preventDefault()
        router.push(e.target.attributes.href.value)
    }
    return(
        <>
            <h3>Полуярные теги:</h3>
            <Nav className={style.tags_list + ' flex-column'} >
                {tags.length > 0 &&
                    tags.map((item, i) => <Nav.Link key={i} href={`/blog/tag/${item.slug}`} onClick={goTo}><img src={item.acf.img} alt=""/>{item.name}</Nav.Link>)
                }
                {tags.length === 0 &&
                    <p>Теги не найдены</p>
                }
            </Nav>
        </>
    )
}
export default TagsWiget
