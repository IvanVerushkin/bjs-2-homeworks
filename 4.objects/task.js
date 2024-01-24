function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student_1 = new Student("Ivan", "male", "18");
let student_2 = new Student("Andrey", "male", "19");
let student_3 = new Student("Lena", "woman", "20");


Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
  this.marks = [];
};

Student.prototype.addMarks = function(...marks) {
  if (this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  } else {
    return 0;
  };
};