import React from 'react'
import RecentsPosts from '../components/RecentsPosts'
import ArticleContainer from '../components/ArticleContainer'


export default function Home() {

   
    return (
       <>
       <div className='row'>
           <ArticleContainer />
           <RecentsPosts/>
         
       </div>
      </>
        
    )
}
