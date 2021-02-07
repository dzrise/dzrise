import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../styles/globals.css'

function App({Component,  pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App;
