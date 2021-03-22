import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/404.module.scss'

export default function Custom404() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Упссс, 404 -  Страница не найдена</h1>
                <Link href="/">
                    <a>На главную</a>
                </Link>
            </main>
            <Footer />
        </>
    )
}
