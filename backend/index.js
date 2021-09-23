const connectToMongo = require('./db')
const express = require('express')
const app = express()
connectToMongo()

const port = 3000

app.use(express.json())

app.get('/',(req,res)=>{
  res.send("Hello World")
})

app.use('/api/auth',require('./routers/auth'))
app.use('/api/notes',require('./routers/notes'))

app.listen(port,()=>{
   console.log(`port listening on localhost:${port}`)
})

