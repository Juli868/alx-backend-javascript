module.exports = function countStudents(file) {
  var fs = require('fs');
  try {
    content = fs.readFileSync(file, 'utf-8');
    const lines_content = content.split('\n');
    var length = 0;
    var items = []
    for (var line of lines_content) {
      length += 1;
      items.push(line.split(','));
    }
    process.stdout.write(`${lenght}~`);
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}
