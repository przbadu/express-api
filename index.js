import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

// routes
import users from './routes/users';
import auth from './routes/auth';
import events from './routes/events';

// setup express app
let app = express();
app.use(bodyParser.json());

// setup routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/events', events);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// run express server in port 8080
app.listen(8080, () => console.log('Running on http://localhost:3000'));
