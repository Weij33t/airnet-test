const cors = require('cors')
const express = require('express')
const app = express()

const userRouter = require('./Routes/User.routes.js')
const appsRouter = require('./Routes/App.routes.js')

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/apps', appsRouter)

app.listen(PORT, () => console.log('Server started on port: ' + PORT))
