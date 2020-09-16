import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ThemeCard from '../components/ThemeCard'
import Pagination from '../components/Pagination'
import CardLoarders from './loaders/CardLoarders'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function ThemesList () {
  const [themes, setthemes] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    axios.get('http://localhost:5000/categories/')
      .then(function (response) {
        // handle success
        setthemes(response.data)
        setloading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])

  const itemsPerPage = 6
  const [currentPage, setcurrentPage] = useState(1)
  const start = currentPage * itemsPerPage - itemsPerPage
  const paginatedThemes = themes.slice(start, start + itemsPerPage)

  const handlePageChange = page => {
    setcurrentPage(page)
  }

  const themedCards = paginatedThemes.map((theme, index) => { return <Col xs={4} className=' card-container' key={index}>{loading ? <CardLoarders key={index} /> : <ThemeCard title={theme.title} slug={theme.slug} />}</Col> })

  return (
    <>
      <Row>{themedCards}</Row>
      <Pagination itemsPerPage={itemsPerPage} length={themes.length} handlePageChange={handlePageChange} currentPage={currentPage} />
    </>)
}
