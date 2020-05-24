import React from 'react'
import ArticleTitle from './ArticleTitle'
import ArticleText from './ArticleText'

export default function TextContainer() {
    return (
        <div className='col' id='article-container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <ArticleTitle title='Ce site est dédié à la compréhension du coran'/>
                        <ArticleText/>
                    </div>
                </div>
        
        </div>
    )
}
