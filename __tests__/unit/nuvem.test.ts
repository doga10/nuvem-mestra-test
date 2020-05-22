import 'dotenv/config'
import { postAPINuvemMestra } from '../../src/framework/utils/nuvem'

test('we should wait for the data return sent to the master cloud api', async () => {
  const data = {
    id: 0,
    nomeCidade: 'Santo Antônio do Caiuá',
    percentualDeCasos: 757.28891
  }

  const response = await postAPINuvemMestra(data)
  expect(response).toEqual(data)
})
