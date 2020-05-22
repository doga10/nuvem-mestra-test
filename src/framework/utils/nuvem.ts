import fetch from 'node-fetch'
import { Nuvem } from '../../domain/nuvem'

const { URL_NUVEM } = process.env
if (!URL_NUVEM) {
  throw Error('there is no URL_NUVEM in .env')
}

export const postAPINuvemMestra = async (data: Nuvem) => {
  const header = {
    method: 'post',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json', MeuNome: 'Douglas Dennys' }
  }
  const response = await fetch(URL_NUVEM, header)
  const parserResponse = await response.json()

  return parserResponse
}
