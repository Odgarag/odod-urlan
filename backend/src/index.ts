import express from 'express'
import cors from 'cors'

require(`@dotenvx/dotenvx`).config()
const url = process.env.DATABASE_URL
const PORT = process.env.PORT || 8000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from backend')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
