import Country from '../models/countries.js'

const getCountries = (req, res, next) => {
  Country.find({})
    .then((country) => res.send({ data: country }))
    .catch(next)
}

function getCountryByName(req, res, next) {
  const { name } = req.params
  Country.findOne({ 'name.common': name })
    .then((country) => res.send({ data: country }))
    .catch(next)
}

function getCountriesNamesByCodes(req, res, next) {
  const { codes } = req.body

  Country.find({ code: { $in: codes } })
    .then((countries) =>
      res.send(countries.map((country) => country.name.common)),
    )
    .catch(next)
}

export { getCountries, getCountryByName, getCountriesNamesByCodes }
