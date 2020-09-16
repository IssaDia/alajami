import React, { useState } from 'react'
import ThemeArticlesCard from './ThemeArticlesCard'
import CardLoarders from './loaders/CardLoarders'
import Pagination from '../components/Pagination'
import Row from 'react-bootstrap/Row'

export default function ThemeArticlesList ({ articles, themeTitle, loading }) {
  console.log(articles)
  const itemsPerPage = 6
  const [currentPage, setcurrentPage] = useState(1)
  const start = currentPage * itemsPerPage - itemsPerPage
  const paginatedArticles = articles.slice(start, start + itemsPerPage)
  const handlePageChange = page => {
    setcurrentPage(page)
  }

  const articleList = paginatedArticles.map((article, index) => {
    const title = article.title
    const author = article.author
    const slug = article.slug
    const date = article.date
    return <div className='col-md-4 card-container' key={index}>{!loading ? <ThemeArticlesCard title={title} author={author} slug={slug} date={date} category={themeTitle} /> : <CardLoarders key={index} />}</div>
  })
  return (
    <>
      <Row>
        {articleList}
      </Row>
      <Pagination itemsPerPage={itemsPerPage} length={articles.length} handlePageChange={handlePageChange} currentPage={currentPage} />
    </>)
}
