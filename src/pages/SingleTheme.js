import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import ThemeArticlesList from '../components/ThemeArticlesList'

export default function SingleTheme (props) {
  const { slug } = useParams()
  const [singleThemeData, setSingleThemeData] = useState([])
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(false)
  useLayoutEffect(() => {
    setloading(true)
    axios.get('http://localhost:5000/categories/category/' + slug)
      .then(function (response) {
        // handle success
        setSingleThemeData(response.data)
        setArticles(response.data.articles)
        setloading(false)
      }
      )
      .catch(function (error) {
        // handle error
        console.log(error)
      }
      )
  }, [slug])

  return (
    <>
      <Title title={singleThemeData.title} />
      <ThemeArticlesList articles={articles} themeTitle={singleThemeData.title} />
    </>)
}
