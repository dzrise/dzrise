import Head from "next/head";

interface IProps {
    headTags: any[]
}

const HeadPage: React.FC<IProps> = ({headTags}) => {
    if(headTags.length > 0) {
        const title = headTags.find(tag => tag.tag === 'title').content;
        let canonical = headTags.find(tag => tag.tag === 'title').content;
        canonical = canonical.replace('http://api.dzrise.ru/', 'http://dzrise.ru/')

        return (
            <Head>
                <title>{title}</title>
                <link rel="canonical" href={canonical}/>


            </Head>
        )
    } else {
        return (
            <Head>
                <title>DzRise Digital</title>
            </Head>
        )
    }
    return (
        <Head>
            <title>DzRise Digital</title>
        </Head>
    )

}

export default HeadPage
