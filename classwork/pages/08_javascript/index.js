/// ex1

var subject1Name = "Excel"
var subject1Prerequisite = []

var subject2Name = "მონაცემთა ანალიზი"
var subject2Prerequisite = ["Excel"]

var subject1 = {
	id: 1,
	name: "Excel",
	prerequisite: false
}

console.log(subject1.name)

var subject2 = {
	id: 2,
	name: "მონაცემთა ანალიზი",
	prerequisite: "Excel"
}

var student1 = {
	id: 1,
	name: "Ana",
	passed_subjects: ["Excel"]
}

var student2 = {
	id: 2,
	name: "Gio",
	passed_subjects: []
}


console.log(student2.passed_subjects.includes("Excel"))

function hasPassed(student, subjectName) {
	return student.passed_subjects.includes(subjectName)
}

console.log(hasPassed(student1, "Excel"))


function chooseSubject(student, subject) {
	var prerequisite = subject.prerequisite
	if (!prerequisite) {
		console.log(student.name + " can choose " + subject.name)
	} else if (hasPassed(student, prerequisite)) {
		console.log(student.name + " can choose " + subject.name)
	} else {
		console.log(student.name + " cannot choose " + subject.name)
	}
}

// chooseSubject(student1, subject1)
// chooseSubject(student1, subject2)
// chooseSubject(student2, subject1)
// chooseSubject(student2, subject2)


const students = [student1, student2]

/*
for (var i=0; i<students.length; i++) {
	var student = students[i]
	chooseSubject(student, subject1)
	chooseSubject(student, subject2)
}
*/

for (student of students) {
	chooseSubject(student, subject1)
	chooseSubject(student, subject2)
}

function chooseSubject(student, subject) {
	var prerequisite = subject.prerequisite
	if (!prerequisite || hasPassed(student, prerequisite)) {
		console.log(student.name + " can choose " + subject.name)
	} else {
		console.log(student.name + " cannot choose " + subject.name)
	}
}

/// ex2
var i = 0;

let button = document.getElementById('click-app-button')
let counterSpan = document.getElementById('count')
button.onclick = function () {
	i++
	console.log(i)
	counterSpan.innerHTML = i;
}


function increaseCounter() {
	j++;
	console.log(j)
	counterSpan2.innerHTML = j;
}
button.onclick = increaseCounter

let counterSpan2 = document.getElementById('count2')
let j = 0;
function increaseCounter2() {
	j++;
	console.log(j)
	counterSpan2.innerHTML = j;
}

button.onclick = increaseCounter


/// ex3


function sayHello() {
	let usernameElement = document.getElementById('username')
	console.log(usernameElement)
	let name = usernameElement.value
	console.log(name)
	document.getElementById('message').innerHTML = "Hello, " + name + "."
}


/// ex4

function miniCalcSum() {
	// get value for a
	let a = document.getElementById('a').value
	// get value for b
	let b = document.getElementById('b').value
	let sum = Number(a) + Number(b)
	console.log(a, b)
	// write result in span
	document.getElementById('minicalc-result').innerHTML = sum	
}



function miniCalcSubstract() {
	// get value for a
	let a = document.getElementById('a').value
	// get value for b
	let b = document.getElementById('b').value
	let sum = Number(a) - Number(b)
	console.log(a, b)
	// write result in span
	document.getElementById('minicalc-result').innerHTML = sum	
}


/// ex5
function addTask() {
	let taskName = document.getElementById('task-name').value
	let tasksElem = document.getElementById('tasks')
	let taskElem = '<li>' + taskName + '</li>'
	// tasksElem.insertAdjacentHTML('afterend', taskName + '<br>')
	tasksElem.insertAdjacentHTML('beforeend', taskElem)
}





/// ex6
var khachapuriRecipe = ["ფქვილი", "კვერცხი", "ყველი", "კარაქი"]

var firstElement = khachapuriRecipe[0]
console.log(firstElement)
var listElem = document.getElementById('list1')
var listContent = ''
// listContent += '<li>' + khachapuriRecipe[0] + '</li>'
// listContent += '<li>' + khachapuriRecipe[1] + '</li>'
// listContent += '<li>' + khachapuriRecipe[2] + '</li>'
// listContent += '<li>' + khachapuriRecipe[3] + '</li>'



// for (var i=0; i<4; i++) {
// 	listContent += '<li>' + khachapuriRecipe[i] + '</li>'
// }

khachapuriRecipe.push("წყალი")
khachapuriRecipe.push("საფუარი")

for (var i=0; i < khachapuriRecipe.length; i++) {
	listContent += '<li>' + khachapuriRecipe[i] + '</li>'
	console.log(i, "<<<", listContent)
}

listElem.innerHTML = listContent




















