import React from 'react'
import RecentsPosts from '../components/RecentsPosts'
import ArticleContainer from '../components/ArticleContainer'
import Row from 'react-bootstrap/Row'

export default function Home () {
  return (
    <>
      <Row>
        <ArticleContainer />
        <RecentsPosts />
      </Row>
    </>)
}
