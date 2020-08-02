import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const ArticleContext = createContext();


const ArticleProvider = ({ children }) => {

    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState()
    useEffect(() => {
          setloading(true)
        const fetchData = async () => {
            const fetchArticles = await axios.get('http://localhost:5000/articles/')
            .then(function (response) {
              // handle success
              setArticles(response.data)
              setloading(false)
              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
        }
      
     fetchData()
      }, [])
    

  return (
    <ArticleContext.Provider value={{ articles, loading }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;