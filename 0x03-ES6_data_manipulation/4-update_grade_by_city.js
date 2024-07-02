export default function updateStudentGradeByCity(students, city, newGrades) {
  students.map((student) => {
    const gradeObj = newGrades.filter((grade) => grade.studentId === student.id);
    if (gradeObj.length !== 0) {
      student.grade = gradeObj[0].grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
  return students.filter((student) => student.location === city);
}
