import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

import Card from 'react-bootstrap/Card'
// import ListGroup from 'react-bootstrap/ListGroup'

function Detail() {
  const [users, setUsers] = useState([])

  let params = useParams()

  // let navigate = useNavigate()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then(
        (users) => setUsers(users)
        // console.log('console' + users))
      )
  }, [])
  console.log(params)
  // useEffect(() => {
  //   // https://jsonplaceholder.typicode.com/albums/1/photos
  //   fetch(`https://jsonplaceholder.typicode.com/users?id=${params}`)
  //     // .then((response) => response.json())
  //     .then((data) => console.log('console' + data.name))
  // }, [])

  // let condition  = params === user

  // .then((response) => response.json())
  //     .then((json) => console.log(json))
  return (
    <div className='detail'>
      {users.map((user) =>
        params.userId == user.id ? (
          <>
            <h2 style={{ textAlign: 'center' }}>User: {user.username}</h2>
            <Card style={{ width: '100vw' }}>
              <Card.Img
                variant='top'
                className='cardImg'
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              />
              <Card.Body>
                <Card.Title>My Detail</Card.Title>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                <ListGroup.Item>website: {user.website}</ListGroup.Item>
              </ListGroup>
            </Card>
          </>
        ) : (
          ''
        )
      )}
    </div>
  )
}

export default Detail
