import { Router } from 'express'
import {
  getCountries,
  getCountriesByCodes,
  getCountryByName,
} from '../controllers/countries.js'

const router = Router()

router.get('/countries', getCountries)

router.get('/country/:name', getCountryByName)

router.get('/borders', getCountriesByCodes)

export default router
