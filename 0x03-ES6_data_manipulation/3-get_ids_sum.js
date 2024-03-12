export default function getStudentIdsSum(students) {
  function add(sum, student) {
    return sum + student.id;
  }
  return students.reduce(add, 0);
}
