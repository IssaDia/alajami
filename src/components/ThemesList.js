import React, { useEffect, useState} from 'react'
import axios from 'axios'
import ThemeCard from '../components/ThemeCard'
import Pagination from '../components/Pagination'
import CardLoarders from './loaders/CardLoarders'

export default function ThemesList() {

  const [themes, setthemes] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/categories/')
  .then(function (response) {
    // handle success
    setthemes(response.data);
    setloading(false);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
  }, [])

  console.log(themes);
  

  const itemsPerPage = 6;
  const [currentPage, setcurrentPage] = useState(1);
  const start = currentPage * itemsPerPage - itemsPerPage;
  const paginatedThemes = themes.slice(start, start + itemsPerPage);

  const handlePageChange = page => {
    setcurrentPage(page);
  };


  const title = paginatedThemes.map ((theme, index) => {

     return <div className='col-md-4 card-container' key={index}>
            {!loading ? <ThemeCard  title={theme.title} slug={theme.slug}/> : <CardLoarders key={index} />}
            </div>
     })
    return (
       <>
          <div className='row'>
              {title}
          </div>
        <Pagination itemsPerPage={itemsPerPage} length={themes.length} handlePageChange={handlePageChange} currentPage={currentPage}></Pagination>
     </>
        
    )
}