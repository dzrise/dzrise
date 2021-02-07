import React, {Component} from "react";
import SectionOne from "../components/HomePage/SectionOne";
import SectionTwo from "../components/HomePage/SectionTwo";
import SectionThree from "../components/HomePage/SectionThree";
import SectionFour from "../components/HomePage/SectionFour";
import SectionFive from "../components/HomePage/SectionFive";
import SectionSixe from "../components/HomePage/SectionSixe";
import SectionSeven from "../components/HomePage/SectionSeven";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";


class Home extends Component  {
    render() {
        return (
            <>
                <Header/>
                <MainSection>
                    <SectionOne/>
                    <SectionTwo/>
                    <SectionThree/>
                    <SectionFour/>
                    <SectionFive/>
                    <SectionSixe/>
                    <SectionSeven/>
                </MainSection>
                <Footer/>
            </>
        )
    }
}

export default Home;
