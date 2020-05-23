import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom"


export default function SingleTheme(props) {

    let { slug } = useParams()

    const [theme, settheme] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000/categories/'+ slug)
    .then(function (response) {
        // handle success
        settheme(response.data);
    
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    
    }, [])
    return (
        <div>
            
        </div>
    )
}
