import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainSection from "../components/MainSection"
import ScrollToTop from "../components/ScrollToTop"

interface Props {
    children:    | JSX.Element    | JSX.Element[]    | string    | string[];
}

const Default: React.FC<Props> = (props: Props) =>  {
    return (
        <>
            <ScrollToTop />
            <Header/>
            <MainSection>
                {props.children}
            </MainSection>
            <Footer/>
        </>
    )
}

export default Default;
