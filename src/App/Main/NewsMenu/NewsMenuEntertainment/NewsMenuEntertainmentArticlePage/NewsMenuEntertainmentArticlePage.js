import React from 'react'
import newsMenuEntertainmentList, { getNewsMenuEntertainmentMap } from './../newsMenuEntertainmentList'

const NewsMenuEntertainmentArticlePage = ({
    match,
    entertainmentMap = getNewsMenuEntertainmentMap(newsMenuEntertainmentList)
}) => {
    return (
        <article className='news-menu-entertainment-article-page'>
            <div className={entertainmentMap[match.params.newsMenuEntertainmentId].newsMenuEntertainmentImg}></div>
            <h2>{entertainmentMap[match.params.newsMenuEntertainmentId].newsMenuEntertainmentTitle}</h2>
            <p>{entertainmentMap[match.params.newsMenuEntertainmentId].newsMenuEntertainmentArticle}</p>
        </article>
    )
}

//css properties locate in NewsMenuWorldNewsArticlePage.css

export default NewsMenuEntertainmentArticlePage