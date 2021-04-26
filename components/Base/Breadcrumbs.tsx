import { useRouter } from 'next/router'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

interface ILink {
    title: string,
    url: string | undefined
}

interface Props {
    list: ILink[],
}

const BreadcrumbList: React.FC<Props> = ({list}: Props) => {
    const router = useRouter()
    const goTo = (e) => {
        e.preventDefault()
        router.push(e.target.attributes.href.value)
    }
    return (
        <Breadcrumb>
            {list.map((item: ILink, i) => {
                if (item.url) {
                   return  <Breadcrumb.Item key={i} onClick={goTo} href={item.url}>{item.title}</Breadcrumb.Item>
                } else {
                    return <Breadcrumb.Item key={i} active>{item.title}</Breadcrumb.Item>
                }
            })}
        </Breadcrumb>
    )
}

export default BreadcrumbList;
