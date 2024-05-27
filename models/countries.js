import mongoose from 'mongoose'

const countriesShema = new mongoose.Schema({
  flags: {
    svg: { type: String },
    png: { type: String },
    alt: { type: String },
  },

  name: {
    common: {
      type: String,
      required: true,
    },
    official: {
      type: String,
      required: true,
    },
  },

  nativeName: {
    type: String,
    required: true,
  },

  capital: {
    type: String,
    required: true,
  },

  region: {
    type: String,
    enum: [
      'Africa' |
        'Asia' |
        'Antarctic' |
        'Europe' |
        'Oceania' |
        'Americas' |
        'All',
    ],
  },

  population: {
    type: Number,
    required: true,
  },
})

export default mongoose.model('country', countriesShema)
