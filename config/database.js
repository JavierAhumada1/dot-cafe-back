const mogosee = require('mongoose')

mogosee.connect(
    process.env.MONGO_CONNECT,
    {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    }
)
.then( () => console.log('Connected to database successfully')) 
.catch( error => console.log(error)) 
