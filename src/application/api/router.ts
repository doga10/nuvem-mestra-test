import { Router } from 'express'
import { casesByDate } from './controller'

export default (router: Router): Router => {
  router.get('', casesByDate)
  return router
}
