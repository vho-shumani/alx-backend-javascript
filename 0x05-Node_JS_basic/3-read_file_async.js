const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter(line => line.trim() !== '');
        const numberOfStudents = students.length;

        console.log(`Number of students: ${numberOfStudents}`);

        const fields = {};
        for (const student of students) {
          const [firstName, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }

        for (const [field, list] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
