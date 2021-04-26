import {useTypedSelector} from "../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../store";
import {fetchHomeSettings} from "../store/actions/pages";
import {fetchPosts} from "../store/actions/posts";
import {fetchTags} from "../store/actions/tags";
import Default from  '../layouts/default'
import SectionOne from "../components/HomePage/SectionOne";
import SectionTwo from "../components/HomePage/SectionTwo";
import SectionThree from "../components/HomePage/SectionThree";
import SectionFour from "../components/HomePage/SectionFour";
import SectionFive from "../components/HomePage/SectionFive";
import SectionSix from "../components/HomePage/SectionSix";
import SectionSeven from "../components/HomePage/SectionSeven";
import style from '../styles/Home.module.scss'
import HeadPage from "../components/Base/HeadPage";



const Index: React.FC = () => {
    const home = useTypedSelector(state => state.pages.home)
    console.log(home)
    const lastPosts = useTypedSelector(state => state.posts.posts.filter((item, index ) => {
        let last  = state.posts.posts.length - 3
        return index > last
    }))
    return (
            <Default>
                <HeadPage
                    headTags={home.head_tags}
                />
                <div className={style.homepage}>
                    {home.banner_bool &&
                        <SectionOne
                            banner={home.banner_top}
                        />
                    }
                    {home.about_me_bool &&
                        <SectionTwo
                            aboutMe={home.about_me}
                        />
                    }
                    {home.service_bool &&
                        <SectionThree
                            services={home.service}
                        />
                    }
                    {home.portfolio_bool &&
                        <SectionFour
                            portfolio={home.portfolio}
                        />
                    }
                    <SectionFive />
                    {lastPosts.length > 0 &&
                        <SectionSix
                            lastPosts={lastPosts}
                        />
                    }
                    <SectionSeven />
                </div>
            </Default>
        )
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchHomeSettings())
    await dispatch(await fetchPosts())
    await dispatch(await fetchTags())
})
