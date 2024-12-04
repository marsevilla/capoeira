const  express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');
const routes = require('./routes/school');

mongoose.connect('mongodb+srv://sevillamariadelmar:Df8ejwc4aFrVwrDY@cluster0.y5dqd.mongodb.net/cluster0?retryWrites=true&w=majority&appName=cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



/*async function run() {
  try {
    await client.connect();

    const database = client.db('cluster0');
    const movies = database.collection('Ressource');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "C'est quoi la FSCF" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}*/


/**
 *
 */

// run().catch(console.dir);

//app.use(json());

app.use('/', routes); //to use the routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//// on écrit toujours ici. Pas après app.listen
const listener = app.listen(process.env.PORT || 4000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/
