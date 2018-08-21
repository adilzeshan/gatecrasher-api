const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

function Event(config) {
  this.attendees = [];
  this.host = null;
  this.date = new Date().getTime();
  this.duration = null;
  this.location = null;
  this.description = '';

  if (config) {
    this.description = config.description || '';
    this.date = config.date || new Date().getTime();
  }
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the API!')
});

app.get('/events', (req, res) => {
  db.ref('eventsDB')
    .once('value', snapshot => {
      let events = [];

      snapshot.forEach(event => {
        events.push(event.val());
      });

      res.json(events);
    });
});

app.post('/event', (req, res) => {
  let config = req.body;
  let newEvent = new Event(config);
  let eventRef = db.ref('eventsDB').push();
  newEvent.id = eventRef.key;

  eventRef
    .set(newEvent)
    .then(() => {
      res.json(newEvent);
    });
});

app.get('/event/:id', (req, res) => {
  const id = req.params.id;

  db.ref(`eventsDB/${id}`)
    .once('value', snapshot => {
      res.json(snapshot);
    });
});

app.delete('/event/:id', (req, res) => {
  const id = req.params.id;

  db.ref(`eventsDB/${id}`)
    .remove();

  res.json({ [id]: 'removed' });
});

app.patch('/event/:id', (req, res) => {
  const id = req.params.id;

  let updates = {
    description: req.body.description
  };

  db.ref(`eventsDB/${id}`)
    .update(updates)
    .then(() => {
      res.json({ [id]: 'updated' });
    });
});

app.listen(3000, () => {
  console.log('Listening to port 3000...');
});