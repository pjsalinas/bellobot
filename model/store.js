'use strict';

const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_BELLONERA);

const db = {
  select: values => {
    let {table, fields} = values;
    return new Promise((resolve, reject) => {
      base(table)
        .select(fields)
        .firstPage((err, data) => {
          err ? reject(err) : resolve(data);
        });
    });
  },
};

module.exports = db;
