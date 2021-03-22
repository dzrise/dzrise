import Header from "../components/Header"
import Footer from "../components/Footer"
import MainSection from "../components/MainSection"
import ScrollToTop from "../components/ScrollToTop"
import SideBarBlog from "../components/Blog/SideBarBlog";

const BlogLayout = (props) =>  {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <MainSection>
                {props.children}
                <SideBarBlog />
            </MainSection>
            <Footer/>
        </>
    )
}

export default BlogLayout;
