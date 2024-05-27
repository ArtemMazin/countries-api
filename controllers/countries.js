import Country from '../models/countries.js'

const getCountries = (req, res, next) => {
  Country.find({})
    .then((country) => res.send({ data: country }))
    .catch(next)
}

export default getCountries
