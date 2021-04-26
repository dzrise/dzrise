import Link from "next/link";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

interface IProps {
    id: string | number
}
const Tag: React.FC<IProps> = ({id}) => {
    const tag = useTypedSelector(state => state.tags.tags.find(t => t.id === id))
    return (
        <Link href={`/blog/tag/${tag.slug}`}>
            <a>
            <OverlayTrigger
                overlay={
                    <Tooltip>
                        {tag.name}
                    </Tooltip>
                }
            >
                <img src={tag.acf.img} alt={tag.name} style={{width:'auto',height: '50px',display: 'block', margin: '0 auto'}}/>
            </OverlayTrigger>
            </a>
        </Link>
    )
}

export default Tag;
