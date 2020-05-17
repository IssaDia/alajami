import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Home() {

    const [users, setusers] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, [])
    return (
        <div>
            {users}
            <h1></h1>
        </div>
    )
}
