'use strict'

const server = require('../server')

const supertest = require('supertest')
const mockRequest = supertest(server.app)

describe('My photo API server', () => {
  it('/ home route works', async () => {
    const response = await mockRequest.get('/')
    expect(response.status).toEqual(200)
    console.log(response.text)
    expect(response.text).toEqual('Hello world!')
  })

  it('/searchImage  route works', async () => {
    const data = { title: 'cat' }
    const response = await mockRequest.get('/searchImage').query(data)
    expect(response.status).toBe(200)
    console.log(typeof response.body)
    expect(typeof response.body).toEqual('object')
  })

  it('/randomImage  route works', async () => {
    const response = await mockRequest.get('/randomImage')
    expect(response.status).toBe(200)
    console.log(response.body)
    expect(typeof response.body).toEqual('object')
  })

  it('respond 404 for bad route ', async () => {
    const response = await mockRequest.get('/bad')
    expect(response.status).toBe(404)
    console.log(response.body)
    expect(response.body.message).toEqual('page not Found')
  })
  it('respond with 404 for bad method ', async () => {
    const response = await mockRequest.post('/bad')
    expect(response.status).toBe(404)
  })
})
