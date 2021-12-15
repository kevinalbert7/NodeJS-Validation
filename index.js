const express = require('express')
const app = express()
const port = 5000

const UsersRoutes = require('./routes/users')

app.use(express.json())

app.use('/users', usersRoutes)

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})