import express from 'express'
import routesAPI from './api/router'

const router = express.Router()

routesAPI(router)

export default router
