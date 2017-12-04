import * as express from 'express'

const APP_PORT = 8000

const app = express()

app.get('/health', (req, res) => {
    res.json({ok: true})
})

app.listen(APP_PORT, () => console.log('Listening on PORT: ', APP_PORT))
