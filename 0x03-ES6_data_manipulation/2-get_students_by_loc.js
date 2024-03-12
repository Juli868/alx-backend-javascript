export default function getStudentsByLocation(students, city) {
  let result;
  if (Array.isArray(students)) {
    result = students.filter((student) => student.location === city);
  } else {
    result = [];
  }
  return (result);
}
