import request from 'supertest'
import app from '../../src/framework/cmd/app'

test('we should wait for the route to return status 200 and an array of the ranking of the 10 largest', () => {
  const response = [
    {
      id: 0,
      nomeCidade: 'Santo Antônio do Caiuá',
      percentualDeCasos: 757.28891
    },
    {
      id: 1,
      nomeCidade: 'Mirador',
      percentualDeCasos: 587.43787
    },
    {
      id: 2,
      nomeCidade: 'São João do Caiuá',
      percentualDeCasos: 563.62084
    },
    {
      id: 3,
      nomeCidade: 'Tamboara',
      percentualDeCasos: 292.96875
    },
    {
      id: 4,
      nomeCidade: 'Amaporã',
      percentualDeCasos: 255.7136
    },
    {
      id: 5,
      nomeCidade: 'Santa Mônica',
      percentualDeCasos: 226.07385
    },
    {
      id: 6,
      nomeCidade: 'Planaltina do Paraná',
      percentualDeCasos: 211.11893
    },
    {
      id: 7,
      nomeCidade: 'Ibema',
      percentualDeCasos: 188.91688
    },
    {
      id: 8,
      nomeCidade: 'Marilena',
      percentualDeCasos: 141.32278
    },
    {
      id: 9,
      nomeCidade: 'Santa Isabel do Ivaí',
      percentualDeCasos: 140.15417
    }
  ]

  request(app)
    .get('/')
    .query({ state: 'PR', start: '2020-05-18', end: '2020-05-20' })
    .expect('Content-Type', /json/)
    .expect(200, response)
})
