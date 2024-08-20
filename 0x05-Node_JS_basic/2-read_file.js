const fs = require('fs');
function countStudents(path) {
    let cs = [];
    let swe = [];
    try{
        data = fs.readFileSync(path, 'utf8').trim().split('\n').slice(1);
        for (line of data){
            categories = line.split(',');
            if (categories[3] === 'CS') {
                cs.push(categories[0]);
            }
            else {
                swe.push(categories[0]);
            }
        }
        console.log(`Number of students: ${data.length}`);
        console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
        console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    }
    catch {
        console.log('Cannot load the database');
    }
}
module.exports = countStudents;