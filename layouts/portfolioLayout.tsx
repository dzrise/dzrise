import Header from "../components/Header"
import Footer from "../components/Footer"
import MainSection from "../components/MainSection"
import ScrollToTop from "../components/ScrollToTop"
import style from "../styles/Portfolio.module.scss";

const PortfolioLayout = (props) =>  {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <MainSection >
                <div className={style.portfolio}>
                    {props.children}
                </div>
            </MainSection>
            <Footer/>
        </>
    )
}

export default PortfolioLayout;
