export default function getListStudentIds(students) {
  let result;
  if (Array.isArray(students)) {
    result = students.map((elements) => elements.id);
  } else {
    result = [];
  }
  return result;
}
