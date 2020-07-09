import React, { useEffect, useState} from 'react'
import axios from 'axios'

export default function RecentsPosts() {

    const [recentsArticles, setrecentsArticles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/articles/recents')
      .then(function (response) {
        setrecentsArticles(response.data)
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     
      }, [])

    const closeRecentsPosts = (e) => {
        e.preventDefault();
        document.getElementById("recents-posts").style.display = "none";
        let articleContainer = document.getElementById('article-container');
        articleContainer.classList.add("col-md-12");
        articleContainer.classList.remove("col");

    }

    const recentsPostsWidget = recentsArticles.map ((recentArticle, index) => {
                return <div className='recents-posts-bloc' key={index}>
                                <h4>{recentArticle.title}</h4>
                                <div className='col-md-12' >
                            <div className='col-md-12 recents-posts-info'>
                                <p>15 juin 2020</p>
                                <span>|</span>
                                <p>{recentArticle.category.title}</p>
                            </div>
                            </div>
                        </div>
               
    } )

    return (
        <div className='col-md-3 recents-posts animate__animated animate__backInUp' id='recents-posts'>
            <div id='recents-posts-container '>
                        <div className="recents-posts-header row">
                            <div className='col-md-12'>
                                <a href='/' onClick={closeRecentsPosts}><i className="material-icons">close</i></a>
                            </div>
                            <div className='col-md-12'>
                                <p>Articles Recents</p>
                            </div>
                        </div>
                        <div className="recents-posts-body row" >
                        {recentsPostsWidget}
                        </div>     
            </div>
        </div>
    )
}
