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
    enum: ['Africa' | 'Asia' | 'Antarctic' | 'Europe' | 'Oceania' | 'Americas'],
  },

  population: {
    type: Number,
    required: true,
  },

  subregion: {
    type: String,
    required: true,
  },

  languages: {
    type: Array,
    required: true,
  },

  currency: {
    type: String,
    required: true,
  },

  tld: {
    type: String,
    required: true,
  },

  code: {
    type: String,
    required: true,
  },

  borders: {
    type: Array,
    required: true,
  },
})

export default mongoose.model('country', countriesShema)
