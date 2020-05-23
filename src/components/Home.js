import React, { useEffect, useState} from 'react'
import axios from 'axios'
import ThemeCard from './ThemeCard'
import Pagination from './Pagination'



export default function Home() {

    const [themes, setthemes] = useState([])



  useEffect(() => {
    axios.get('http://localhost:5000/categories/')
  .then(function (response) {
    // handle success
    setthemes(response.data);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
  }, [])

  const itemsPerPage = 6;
  const [currentPage, setcurrentPage] = useState(1);
  const start = currentPage * itemsPerPage - itemsPerPage;
  const paginatedThemes = themes.slice(start, start + itemsPerPage);

  const handlePageChange = page => {
    setcurrentPage(page);
  };



  const title = paginatedThemes.map ((theme, index) => {

     return <ThemeCard key={index} title={theme.title} />
          
  })
    return (
       <>
        <section className="cards-wrapper">
        {title}
        </section>

<Pagination itemsPerPage={itemsPerPage} length={themes.length} handlePageChange={handlePageChange} currentPage={currentPage}></Pagination>
     </>
        
    )
}
