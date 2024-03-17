export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof(name) === 'String') {
        this._name = name
    }
    else {
        console.error("Name must be a string");
    }
    if (typeof(length) === 'number') {
        this._length = length
    }
    else {
        console.error("Length must be a number");
    }
    if (Array.isArray(students)){
        this._students = students;
    }
    else {
        console.error("Students must be a list");
    }
  }
}