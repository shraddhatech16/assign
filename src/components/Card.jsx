import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <div className="Card-3">
            {}
            <div className="card-body">
                <h4 className="card-title text-primary" style={{"marginBottom": "15px"}}>{props.id} - {props.title}</h4>
                <p className="card-text">{props.body}</p>
                <p className="card-text"><small className="text-primary">By User {props.userId}</small></p>
            </div>
        </div>
    </div>
  )
}
    