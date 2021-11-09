import 'reflect-metadata'
import * as express from 'express'

import routes from './routes'
import './database/connect'

const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})