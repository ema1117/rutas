const app = require('./app')
require('dotenv').config()
require('./db/connect').connect()

const port = process.env.PORT  

// .listen el metodo para levantar un servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  