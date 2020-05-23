import React from 'react'
import ContentLoader from 'react-content-loader'


export default function CardLoarders(props) {
    return (
            <ContentLoader viewBox="0 0 400 400" height={400} width={400} speed={2} {...props}>
                <rect x="90" y="20" rx="3" ry="2" width="460" height="450" />
            </ContentLoader>
    )
}
