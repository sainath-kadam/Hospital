require('dotenv').config()
const  express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())

app.use(require('./routes'));

app.get('/', () => {
    return("This is Home page from backend");
})


app.listen(5000, () => console.log('Server started on ' + 5000))
