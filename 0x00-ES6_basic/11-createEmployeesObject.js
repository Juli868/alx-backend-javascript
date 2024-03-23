export default function createEmployeesObject(departmentName, employees) {
  let result = Object.assign({},{[departmentName]: employees});
  return result;
}
