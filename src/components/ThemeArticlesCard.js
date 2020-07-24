import React, { useEffect, useState} from 'react'
import axios from 'axios'


export default function ThemeArticlesCard() {

  const [articlesFromSpecificTheme, setarticlesFromSpecificTheme] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchArticles = await axios.get('http://localhost:5000/articles/')
      .then(function (response) {
        // handle success
        setarticlesFromSpecificTheme(response.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

fetchData()
  }, [])


    return (
        <div className='article-card-container'>
           <div className="card">
             <div className='card-background'>
             <img src="https://unsplash.it/400/608?image=123" alt="article-background" />
              <div className='card-article-overlay'>
                <div className="card-article-overlay-content">
                <ul className="card-article-meta">
                    <li><a href="#0"><i className="fa fa-tag"></i> Html5/Css3</a></li>
                    <li><a href="#0"><i className="fa fa-clock-o"></i> 2 min ago</a></li>
                  </ul>
                  <a href="#0" className="card-article-title">How to create a card based article with HTML5 &amp; CSS3</a>
                  <ul className="card-article-meta card-article-meta--last">
                    <li><a href="#0"><i className="fa fa-user"></i> Mithicher</a></li>
                    <li><a href="#0"><i className="fa fa-facebook-square"></i> Share</a></li>
                  </ul>
                </div>
              </div>
             </div>
           </div>
        </div>
    )
}
