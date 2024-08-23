const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  if (!databaseFile) {
    return res.status(500).send('Error: Database file path not provided');
  }

  return fs.readFile(databaseFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Cannot load the database');
    }

    const filteredData = data
      .trim()
      .split('\n')
      .slice(1)
      .filter((line) => line.trim() !== '');

    const fields = {};
    let responseText = `Number of students: ${filteredData.length}\n`;

    for (const line of filteredData) {
      const categories = line.split(',');
      const field = categories[3];
      if (!fields[field]) {
        fields[field] = { count: 0, list: [] };
      }
      fields[field].count += 1;
      fields[field].list.push(categories[0]);
    }

    for (const fieldKey in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, fieldKey)) {
        responseText += `Number of students in ${fieldKey}: ${fields[fieldKey].count}. List: ${fields[fieldKey].list.join(', ')}\n`;
      }
    }

    return res.send(`This is the list of our students\n${responseText}`);
  });
});

app.listen(1245);

module.exports = app;
