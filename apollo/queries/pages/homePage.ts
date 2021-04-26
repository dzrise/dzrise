import {gql} from '@apollo/client'
import {SeoPage}  from '../../fragments/seo'
import {TagsFragment} from '../../fragments/tags'

const homePageQL = gql`
    ${SeoPage}
    ${TagsFragment}
    query homePageQL {
        page(id: "12", idType: DATABASE_ID) {
            ...SeoPage
            home {
                aboutMeBool
                portfolioBool
                serviceBool
                aboutMe {
                    aboutMeText
                    aboutMeTilte
                 fieldGroupName
                    aboutMeImg {
                        altText
                        sourceUrl(size: LARGE)
                    }
                }
                bannerBool
                portfolio {
                    title
                    items {
                        works {
                            ... on Portfolio {
                                id
                                tags {
                                    nodes{
                                        ...TagsFragment
                                    }
                                }
                                slug
                                title
                                Portfolio {
                                    prevImg {
                                        altText
                                        sourceUrl(size: LARGE)
                                    }
                                }
                            }
                        }
                    }
                }
                bannerTop {
                    subtitle
                    title
                    btn
                    btnLink
                    btnText
                    img {
                        altText
                        sourceUrl(size: LARGE)
                    }
                    imgFon {
                        altText
                        sourceUrl(size: LARGE)
                    }
                }
                service {
                    title
                    services {
                        service {
                            ... on Service {
                                Services {
                                    prevImg {
                                        altText
                                        sourceUrl(size: LARGE)
                                    }
                                }
                                tags {
                                    nodes{
                                        ...TagsFragment
                                    }
                                }
                            }
                        }
                        number
                        text
                        title
                    }
                }
            }
        }
    }
`

export { homePageQL }
