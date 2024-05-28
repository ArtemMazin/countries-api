import { Router } from 'express'
import {
  getCountries,
  getCountriesNamesByCodes,
  getCountryByName,
} from '../controllers/countries.js'

const router = Router()

router.get('/countries', getCountries)

router.get('/country/:name', getCountryByName)

router.post('/borders', getCountriesNamesByCodes)

export default router
