/* Project: La Bellonera
 * Description: A bot to share music from a Spotify Public Playlist reflected on an Airtable Base with a WhatsApp Group.
 * Date: 2019-10-21
 * Dependencies: Node.js, Spotify, Claudia JS, Express, aws-serveless-express, Airtable, iOS Shortcuts (a.k.a Workflow)
 * Version: 1.0.0
 * Author: Pedro J. Salinas
 * Read the following artible: Running Express Apps in AWS Lambda, https://claudiajs.com/tutorials/serverless-express.html
 */

'use strict';

const express = require('express');
const app = express();
const workflow = require('./routes/workflow');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use('/workflow', workflow);

app.listen(3000, () => console.log(`Example app listening on port 3000!`)); // <-- comment this line out from your app
//module.exports = app; // <-- uncomment this line. export your app so aws-serverless-express can use it
