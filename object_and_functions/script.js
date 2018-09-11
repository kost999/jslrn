// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }
//
// Object.abc = function () {
//     console.log(this.toString())
// }
//
// var Person = function (name, yearOfBirth, job) {
//     this.name = name
//     this.yearOfBirth = yearOfBirth
//     this.job = job
//     this.toString = function () {
//         return this.name
//     }
// }
//
// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth)
// }
//
// Person.prototype.lastName = 'Smith'
//
// var john = new Person('John', 1990, 'teacher')
// var jane = new Person('Jane', 1969, 'Designer')
// var mark = new Person('Mark', 1948, 'retired')
//
// var persons = [john, jane, mark]
// for (i in persons) {
//     persons[i].calculateAge()
//     console.log(persons[i].lastName)
//
//     console.log('\n\n\n\n\n')
// }


// Object.create

// var personProto = {
//     calculateAge: function () {
//         console.log(2016 - this.yearOfBirth)
//     }
// }
//
// var john = Object.create(personProto)
// john.name = 'John'
// john.yearOfBirth = 1990
// john.job = 'teacher'
//
// var jane = Object.create(personProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1990},
//     job: {value: 'Designer'}
// })

// First class functions
// var years = [1990, 1965, 1937, 2005, 1998]
//
// function arrayCalc(arr, fn) {
//     var arRes = []
//     for (var i = 0; i < arr.length; i++) {
//         arRes.push(fn(arr[i]))
//     }
//     return arRes
// }
//
// function calculateAge(el) {
//     return 2016 - el
// }
//
// function isFullAge(el) {
//     return el >= 18
// }
//
// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el))
//     }
//     return -1
// }
//
// var ages = arrayCalc(years, calculateAge)
// console.log(ages)
//
// var fullAges = arrayCalc(ages, isFullAge)
// console.log(fullAges)
//
// var heartRates = arrayCalc(ages, maxHeartRate)
// console.log(heartRates)

//Functions returning functions
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function (name) {
//             console.log('Hello, ' + name + ', what do you do?')
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher')
// var designersQuestion = interviewQuestion('designer')
// 
// teacherQuestion('Mike')
// designersQuestion('John')
// designersQuestion('Nike')
//
// interviewQuestion('teacher')('Mark')

// Lecture IIFE (Immediately Invoked Function Expression)

// function game() {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// }
// game()

(function () {
    var score = Math.random() * 10
    console.log(score >= 5)
})(); // this semicolon is needed because otherwise the interpreter think that "()" of the next function is the argument place

// console.log(score)

(function (abc) {
    var score = Math.random() * 10
    console.log(score >= 5 - abc)
})(5)























