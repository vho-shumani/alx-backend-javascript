const express = require('express');
const fs = require('fs').promises;
const app = express();

const countStudents = async (path) => {
    try {
      const data = await fs.readFile(path, 'utf8');
      const students = data.split('\n').filter(line => line.trim() !== '').slice(1);
      const fields = {};
      
      students.forEach(student => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });
  
      let output = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      return output.trimEnd();
    } catch (error) {
      throw new Error(error);
    }
  };


app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.send(error.message);
    }
});

app.listen(1245);

module.exports = app;