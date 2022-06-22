function Student (firstName, lastName, indexNumber, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.indexNumber = indexNumber;
    this.grades = grades;
}

let printStudent = function (student) {
    const grades = student.grades;
    const averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
    console.log(`Student data: 
    first name: ${student.firstName}
    last name: ${student.lastName}
    average grade: ${averageGrade.toFixed(2)}`)
}

printStudent(new Student('Kamil', 'Ślimak', 's123456', [3,2,4,2,3,4,5,3,4,5,3,2,3,4]))
