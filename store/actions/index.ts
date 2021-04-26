import * as PostsActions from './posts'
import * as CategoriesActions from './categories'
import * as ProjectsActions from './projects'
import * as ServicesActions from './services'
import * as TagsActions from './tags'
import * as ProjectTypesActions from './projectTypes'
import * as CommentsActions from './comments'
export default {
    ...PostsActions,
    ...CategoriesActions,
    ...ProjectsActions,
    ...ServicesActions,
    ...TagsActions,
    ...ProjectTypesActions,
    ...CommentsActions
}
