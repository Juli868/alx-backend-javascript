export default function getStudentIdsSum(students) {
  let result = 0;
  for (let i = 0; i < students.length; i += 1) {
    result += students[i].id;
  }
  return result;
}
