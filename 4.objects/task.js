function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function(...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  };
};

Student.prototype.getAverage = function(...marks) {
  if ((this.hasOwnProperty('marks') === false) || (this.hasOwnProperty('marks') === '')) {
    return 0;
  } else {
    let sum = 0;
    let count = this.marks.length;
    this.marks.map(item => sum = sum + item);
    this.Average = sum / count;
    return this.Average;
  };
};

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};