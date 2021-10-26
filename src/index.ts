import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import routes from './routes'

const app = express()
const port = process.env.PORT || 3333

createConnection()

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})