import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function Home() {
  const [pic, setPic] = useState([])

  let navigate = useNavigate()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then(
        (users) => setPic(users)
        // console.log('console' + users))
      )
  }, [])
  return (
    <>
      <h2 className='user_title'>List of users </h2>
      <div className='randomImg'>
        {pic.map((p) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={`https://robohash.org/${p.id}?set=set2&size=180x180`}
            />
            <Card.Body>
              <Card.Title>{p.username}</Card.Title>
              <Card.Text>{p.company.bs}</Card.Text>
              <Button
                variant='primary'
                onClick={() => navigate(`detail/${p.id}`)}
              >
                Get More
              </Button>
              {/* <Card.Link href={`detail/${p.id}`}>Get More</Card.Link> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Home

// {pic.map((p) => (
//   <div className='imgContainer'>
//     <Image
//       className=' colorImg roundedCircle'
//       src={`https://robohash.org/${p.id}?set=set2&size=180x180`}
//     />
//     <p>{p.title}</p>
//     <Link to='/'>My Detail</Link>
//     {/* <p>My Detail</p> */}
//   </div>
// ))}
