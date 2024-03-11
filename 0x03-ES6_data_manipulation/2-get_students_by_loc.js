export default function getStudentsByLocation(students, city) {
  const result = [];
  for (let i = 0; i < students.length; i += 1) {
    if (students[i].location === city) {
      result.push(students[i]);
    }
  }
  return (result);
}
