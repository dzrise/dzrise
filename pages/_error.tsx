import { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/404.module.scss'

interface Error {
    statusCode?: number | null | undefined
}

const Error: NextPage<Error> = ({ statusCode }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>{statusCode ? `Ошибка ${statusCode} на сервере` : 'Ошибка в браузере'}</h1>
                <Link href="/">
                    <a>На главную</a>
                </Link>
            </main>
            <Footer />
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
