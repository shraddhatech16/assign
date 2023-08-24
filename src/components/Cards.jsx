import React from 'react'
import { useEffect, useState } from "react"
import Card from './Card'

export default function Cards() {

    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
        .then(response => {
            return response.json()
        }).then(data => {
            setUsers(data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <>
    <div className='container'>
        <div className="container row">
            {users.map((element)=>{
              return <div className="col-md-6 col-lg-4 my-3" key={element.id}>
                <Card title={element.title} id={element.id} body={element.body} userId={element.userId} />
              </div>
            })}
        </div>
    </div>
    </>
  )
}