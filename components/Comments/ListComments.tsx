import React from 'react'
import parse from 'html-react-parser'
import * as moment from 'moment'
import {IComment} from "../../types/comment";
import {useActions} from "../../hooks/useActions";
import style from "../../styles/Blog.module.scss"

interface IProps {
    comments: IComment[];
}


const ListComments: React.FC<IProps> = ({comments}: IProps) => {
    const { setParent } = useActions()
    return (
            <React.Fragment>
                {comments.map((comment) =>  (
                        <div key={comment.id} className={style.comment_item}>
                            <div className={style.comment_item__body}>
                                <div>
                                    { parse(comment.content.rendered) }
                                </div>
                                <div className={style.comment_item__footer}>
                                    <a onClick={() => setParent({id: comment.id, name: comment.author_name})}>Ответить</a>
                                    <span>{ comment.author_name }</span>
                                    <span>{ moment(comment.date).format('DD/MM/YYYY') }</span>
                                </div>
                            </div>
                            { comment.child && comment.child.length > 0 ? <ListComments comments={comment.child} /> : null }
                        </div>
                ))}
            </React.Fragment>
    )
}

export  default  ListComments;
