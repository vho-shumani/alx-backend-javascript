const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    const databaseFile = process.argv[2];
    if (!databaseFile) {
      response.write('Error: Database file path not provided');
      response.end();
      return;
    }
    fs.readFile(databaseFile, 'utf8', (err, data) => {
      if (err) {
        response.write('Error: Cannot load the database');
        response.end();
      } else {
        const filteredData = data
          .trim()
          .split('\n')
          .slice(1)
          .filter((line) => line.trim() !== '');
        const fields = {};
        response.write(`Number of students: ${filteredData.length}\n`);
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
            response.write(`Number of students in ${fieldKey}: ${fields[fieldKey].count}. List: ${fields[fieldKey].list.join(', ')}\n`);
          }
        }
        response.end();
      }
    });
  }
});

app.listen(1245);

module.exports = app;
