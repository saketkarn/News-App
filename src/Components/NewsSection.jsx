import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsSection = ({category}) => {
    const [articles, setArticles]= useState([])
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=13d3441be5044649998fc62235d59662`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    },[category])
  return (
    <div>
    <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    {articles.map((news, index)=>{
        return <NewsItem key={index}
        title={news.title}
        description={news.description}
        src={news.urlToImage}
        url={news.url}
        />
    })}
    </div>
  )
}

export default NewsSection
