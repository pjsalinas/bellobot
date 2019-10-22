const express = require('express');
const router = express.Router();

// home page of this route
router.get('/', (req, res) => {
  console.log('Workflow Home Page');
});

router.post('/', (req, res) => {
  let respJson = {
    url: 'https://pjsalinas.github.io',
    note: 'this is the note',
  };
  console.log('json', respJson);

  res.json(respJson);
});

module.exports = router;
