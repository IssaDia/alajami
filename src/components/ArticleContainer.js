import React from 'react'
import ArticleTitle from './ArticleTitle'
import ArticleText from './ArticleText'
import Col from 'react-bootstrap/Col'

export default function TextContainer() {
    return (
        <Col xs={8} id='article-container'>    
            <ArticleTitle title='Ce site est dédié à la compréhension du coran'/>
            <ArticleText/>
        </Col>
    )
}
