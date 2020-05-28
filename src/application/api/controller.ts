import { Request, Response } from 'express'
import moment from 'moment'
import { getApiCovid } from '../../framework/utils/covid'
import { postAPINuvemMestra } from '../../framework/utils/nuvem'
import { CovidInfo } from '../../domain/covid'
import { Nuvem } from '../../domain/nuvem'

function sortCases (arr: CovidInfo[]) {
  arr.sort(function (a: CovidInfo, b: CovidInfo) {
    var keyA = a.confirmedPer100kInhabitants
    var keyB = b.confirmedPer100kInhabitants
    if (keyA > keyB) return -1
    if (keyA < keyB) return 1
    return 0
  })
}

const parserNuvem = (index: number, data: CovidInfo): Nuvem => {
  return {
    id: index,
    nomeCidade: data.city,
    percentualDeCasos: data.confirmedPer100kInhabitants
  }
}

export const casesByDate = async (req: Request, res: Response) => {
  const params: any = req.query
  if (params.start && params.end && params.state) {
    const startDate = moment(params.start, 'YYYY-MM-DD')
    const endDate = moment(params.end, 'YYYY-MM-DD')
    const diff = endDate.diff(startDate, 'days')

    let cases: CovidInfo[]
    for (let date = 0; date <= diff; date++) {
      if (date === 0) {
        const response = await getApiCovid(params.state, startDate.format('YYYY-MM-DD'))
        if (response.count > 0) {
          cases = response.results
        }
      } else {
        const parserDate = moment(startDate.add(1, 'days')).format('YYYY-MM-DD')
        const response = await getApiCovid(params.state, parserDate)
        if (response.count > 0) {
          cases = response.results
        }
      }
    }

    // @ts-ignore
    sortCases(cases)
    // @ts-ignore
    const sort = cases.slice(0, 10)
    const arr: Nuvem[] = []
    for (const index in sort) {
      const parser = parserNuvem(+index, sort[index])
      const response = await postAPINuvemMestra(parser)
      arr.push(response)
    }

    return res.status(200).json({ data: arr, status: true, code: 200 })
  }
  return res.status(401).json({ data: 'required parameters  ', status: false, code: 401 })
}
