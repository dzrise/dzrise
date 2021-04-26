import Header from "../components/Header"
import Footer from "../components/Footer"
import MainSection from "../components/MainSection"
import ScrollToTop from "../components/ScrollToTop"
import style from "../styles/Blog.module.scss";

const BlogLayout = (props) =>  {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <MainSection >
                <div className={style.blog}>
                    {props.children}
                </div>
            </MainSection>
            <Footer/>
        </>
    )
}

export default BlogLayout;
