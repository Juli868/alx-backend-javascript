export default function getListStudentIds(students) {
  const result = [];
  if (Array.isArray(students)) {
    for (let i = 0; i < students.length; i += 1) {
      result.push(students[i].id);
    }
  }
  return result;
}
