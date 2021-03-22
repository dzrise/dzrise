import {IPost} from "../../types/post"
interface Props {
  data: IPost
}

const ArticleBlog: React.FC<Props> = ({data}: Props) => {
    return (
        <article>
            <h2>{data.title}</h2>
        </article>
    )
}
export default ArticleBlog;
