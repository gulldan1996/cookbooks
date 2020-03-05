const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/recipe', require('./routes/create.routes'))
app.use('/api/recipe', require('./routes/recipe.routes'))
app.use('/api/recipe', require('./routes/delete.routes'))
app.use('/api/recipe', require('./routes/modify.routes'))
app.use('/api/recipe', require('./routes/get.history.routes'))
app.use('/api/history', require('./routes/delete.history.routes'))

app.use(express.static('client/build'))

const PORT = process.env.PORT || 5000

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || config.get('mongoUri'), {
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

