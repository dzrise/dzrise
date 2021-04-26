import Nav from 'react-bootstrap/Nav'
import {useRouter} from 'next/router'
import style from "../../styles/Blog.module.scss"
import {useTypedSelector} from "../../hooks/useTypedSelector";

const CategoriesList: React.FC = () => {
    const router = useRouter()
    const categories = useTypedSelector(state => state.categories.categories)
    const categoriesError = useTypedSelector(state => state.categories.error)
    const goTo = (e) => {
        e.preventDefault()
        router.push(e.target.attributes.href.value)
    }

    if(categoriesError){
        return (
            <>
                <h2>Категории:</h2>
                <p>Ошибка загрузки категорий</p>
            </>
        )
    }
    return (
        <>
            <h2>Категории:</h2>
            <Nav className={style.category_list + ' flex-column'} >
                {categories.length > 0 &&
                    categories.map((item, i) => <Nav.Link key={i} href={`/blog/category/${item.slug}`} onClick={goTo}>{item.name}<span>{item.count}</span></Nav.Link>)
                }
                {categories.length === 0 &&
                    <p>Категории не найдены</p>
                }
            </Nav>
        </>
    )
}
export default CategoriesList;
