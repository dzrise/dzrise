import {AppProps} from 'next/app';
import {wrapper} from "../store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../styles/globals.scss'


const WrappedApp: React.FC<AppProps> = ({Component, pageProps}) => {
    return (
            <Component {...pageProps} />
    )
};

export default wrapper.withRedux(WrappedApp);
