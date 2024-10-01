const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = data.trim().split('\n').slice(1);
    const numberOfStudents = students.length
    const sweStudents = [];
    const csStudents = [];
    for (student of students) {
      if (student.includes('CS')) {
        csStudents.push(student.split(',').slice(0,1).join());
      } else {
        sweStudents.push(student.split(',').slice(0,1).join());
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in CS: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
