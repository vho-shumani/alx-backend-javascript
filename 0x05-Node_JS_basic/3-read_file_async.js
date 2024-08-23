const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const filteredData = data
          .trim()
          .split('\n')
          .slice(1)
          .filter((line) => line.trim() !== '');
        const fields = {};
        console.log(`Number of students: ${filteredData.length}`);
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
            console.log(`Number of students in ${fieldKey}: ${fields[fieldKey].count}. List: ${fields[fieldKey].list.join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}
module.exports = countStudents;
