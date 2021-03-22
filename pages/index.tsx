import React from "react";
import Default from  '../layouts/default'
import SectionOne from "../components/HomePage/SectionOne";
import SectionTwo from "../components/HomePage/SectionTwo";
import SectionThree from "../components/HomePage/SectionThree";
import SectionFour from "../components/HomePage/SectionFour";
// import SectionFive from "../components/HomePage/SectionFive";
import SectionSixe from "../components/HomePage/SectionSixe";
import SectionSeven from "../components/HomePage/SectionSeven";
import style from '../styles/Home.module.scss'
const Index = ({pageProps}) => {
        return (
            <Default>
                <div className={style.homepage}>
                    <SectionOne/>
                    <SectionTwo/>
                    <SectionThree/>
                    <SectionFour/>
                    {/*<SectionFive/>*/}
                    <SectionSixe/>
                    <SectionSeven/>
                </div>
            </Default>
        )
}


export default Index;
