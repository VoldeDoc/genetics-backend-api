import express from 'express'
import dotenv from 'dotenv'
import router from './route/router'
dotenv.config()
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from Express + TSX')
})
app.use('/', router)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`)
    })
}

export default app