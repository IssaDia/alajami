import React, { useLayoutEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom"
import Title from '../components/Title'


export default function SingleTheme(props) {

    let { slug } = useParams()
    const [theme, settheme] = useState([])

    useLayoutEffect(() => {
        axios.get('http://localhost:5000/categories/category/'+ slug)
    .then(function (response) {
        // handle success
        settheme(response.data);
        
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    
    }, [slug])

console.log(theme.title);


    return (
        <div>
            <Title title={theme.title}/>
            <div className="blog-card spring-fever">
                <div className="title-content">
                    <h3><a href="/">Titre</a></h3>
                    <div className="intro"> <a href="/">Inspiration</a> </div>
                </div>
                <div className="card-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... </p>
                    <a href="/">Read Article<span className="licon icon-arr icon-black"></span></a>
                </div>
                <div className="utility-info">
                    <ul className="utility-list">
                        <li><span className="licon icon-like"></span><a href="/">2</a></li>
                        <li><span className="licon icon-com"></span><a href="/">12</a></li>
                        <li><span className="licon icon-dat"></span>03 jun 2017</li>
                        <li><span className="licon icon-tag"></span><a href="/">Photos</a>, <a href="/">Nice</a></li>
                    </ul>
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>


            
        
            
        </div>
    )
}
