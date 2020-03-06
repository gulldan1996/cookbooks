const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

app.use(express.json({ extended: true }));

app.use(routes);

app.use(express.static('client/build'))

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start();
