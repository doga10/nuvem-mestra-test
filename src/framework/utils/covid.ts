import fetch from 'node-fetch'
import humps from 'humps'
// import { Covid } from '../../domain/covid'

const { URL_COVID } = process.env
if (!URL_COVID) {
  throw Error('there is no URL_COVID in .env')
}

export const getApiCovid = async (state: string, date: string): Promise<any> => {
  const response = await fetch(`${URL_COVID}?state=${state}&date=${date}`)
  const parserResponse = await response.json()
  return humps.camelizeKeys(parserResponse)
}
