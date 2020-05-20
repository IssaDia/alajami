import React, { useEffect, useState} from 'react'
import axios from 'axios'

export default function ThemesList() {

    const [articles, setarticles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/categories/')
  .then(function (response) {
    // handle success
    setarticles(response.data);
    
    
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
  }, [])

  console.log(articles);
    return (

        
        <>
        </>
    )

}
