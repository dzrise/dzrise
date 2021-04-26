import Header from "../components/Header"
import Footer from "../components/Footer"
import MainSection from "../components/MainSection"
import ScrollToTop from "../components/ScrollToTop"
import style from "../styles/Service.module.scss";

const ServiceLayout = (props) =>  {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <MainSection >
                <div className={style.services}>
                    {props.children}
                </div>
            </MainSection>
            <Footer/>
        </>
    )
}

export default ServiceLayout;
