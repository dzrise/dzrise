import {Component} from 'react';
import InDeveloping from "../../components/Base/inDeveloping";
import Header from "../../components/Header";
import MainSection from "../../components/MainSection";
import Footer from "../../components/Footer";


class Blog extends Component {
    render() {
        return (
            <>
                <Header />
                <MainSection>
                    <InDeveloping/>
                </MainSection>
                <Footer/>
            </>
        )
    }
}
export default Blog;
