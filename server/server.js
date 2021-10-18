const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const DB = process.env.DB_URI;
const port = process.env.PORT || 5003;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
    console.log('CONECTADO A MONGODB PAPI!');
}).catch(err => console.log(`MI ERROR: ${err}`));