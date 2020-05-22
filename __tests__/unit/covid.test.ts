import 'dotenv/config'
import { getApiCovid } from '../../src/framework/utils/covid'

test('we must wait for the return of all cases of the state disease in the informed period', async () => {
  const response = await getApiCovid('PR', '2020-05-10')

  expect(response.count).toBe(155)
  expect(response.results.length).toBe(155)
  expect(response.next).toBe(null)
  expect(response.previous).toBe(null)
})
