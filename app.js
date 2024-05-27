import express from 'express'
import mongoose from 'mongoose'
import { PORT, DB_CONN } from './utils/config.js'
import router from './routes/index.js'
import cors from 'cors'

const app = express()

mongoose.connect(DB_CONN)

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
)

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
