import React, { useContext, useLayoutEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom"
import Title from '../components/Title'
import { ArticleContext } from "../context/ArticleContext"
import ThemeArticlesList from '../components/ThemeArticlesList'



export default function SingleTheme(props) {

    let { slug } = useParams()
    const [themeArticles, setthemeArticles] = useState([])
    const { articles } = useContext(ArticleContext)
    console.log(themeArticles);

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
        <div>
            <Title title={themeArticles.title}/>
           

            
        <ThemeArticlesList></ThemeArticlesList>
            
        </div>
    )
}
