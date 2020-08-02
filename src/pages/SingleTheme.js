import React, {  useLayoutEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom"
import Title from '../components/Title'
import ThemeArticlesList from '../components/ThemeArticlesList'



export default function SingleTheme(props) {

    let { slug } = useParams()
    const [themeArticles, setthemeArticles] = useState([])

    useLayoutEffect(() => {
        axios.get('http://localhost:5000/categories/category/'+ slug)
    .then(function (response) {
        // handle success
        setthemeArticles(response.data);
        
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    
    }, [slug])


    return (
        <>
            <Title title={themeArticles.title}/>
            <ThemeArticlesList articles={themeArticles}></ThemeArticlesList>
        </>
    )
}
