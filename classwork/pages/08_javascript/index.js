/// ex1-say-hello


function sayHello() {
	let usernameElement = document.getElementById('username')
	console.log(usernameElement)
	let name = usernameElement.value
	console.log(name)
	document.getElementById('message').innerHTML = "Hello, " + name + "."
}

/// ex2-todo-list
function addTask() {
	let taskName = document.getElementById('task-name').value
	let tasksElem = document.getElementById('tasks')
	let taskElem = '<li>' + taskName + '</li>'
	// tasksElem.insertAdjacentHTML('afterend', taskName + '<br>')
	tasksElem.insertAdjacentHTML('beforeend', taskElem)
}



/// ex3-mini-calc

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



/// ex4-click-app

var i = 0;

let button = document.getElementById('click-app-button')
let counterSpan = document.getElementById('count')

function increaseCounter() {
	i++;
	console.log(i)
	counterSpan.innerHTML = i;
}



/// ex5-recipe-list
// ახალი სიის შექმნა
var khachapuriRecipe = ["ფქვილი", "კვერცხი", "ყველი", "კარაქი"]

// სიის პირველი ელემენტის წაკითხვა
var firstElement = khachapuriRecipe[0]
console.log(firstElement)
var listElem = document.getElementById('list1')
var listContent = ''
// ასე მივაწებებდით თითოეული ინგრედიენტის ხაზს ელემენტს
// listContent += '<li>' + khachapuriRecipe[0] + '</li>'
// listContent += '<li>' + khachapuriRecipe[1] + '</li>'
// listContent += '<li>' + khachapuriRecipe[2] + '</li>'
// listContent += '<li>' + khachapuriRecipe[3] + '</li>'

// ციკლის გამოყენებით წინა ხაზების გაკეთება
// for (var i=0; i<4; i++) {
// 	listContent += '<li>' + khachapuriRecipe[i] + '</li>'
// }

khachapuriRecipe.push("წყალი")
khachapuriRecipe.push("საფუარი")

// სიის სიგრძის მიხედვით დინამიურად განსაზღვრა, რამდენჯერ გაეშვება ციკლი
for (var i=0; i < khachapuriRecipe.length; i++) {
	listContent += '<li>' + khachapuriRecipe[i] + '</li>'
	console.log(i, "<<<", listContent)
}

listElem.innerHTML = listContent



/// ex6-check-prereqs

var subject1Name = "Excel"
var subject1Prerequisite = []

var subject2Name = "მონაცემთა ანალიზი"
var subject2Prerequisite = ["Excel"]

// ახალი ობიექტის შექმნა
var subject1 = {
	id: 1,
	name: "Excel",
	prerequisite: false
}

// ობიექტის ატრიბუტის წაკითხვა
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

// listElem.includes(element) აბრუნებს true-ს თუ
// სიაში შედის ელემენტი, თუ არა და false-ს
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


// ქვედა ორი ციკლი ერთსა და იმავეს აკეთებს
// for ... of სინტაქსი არის შექმნილი სიებზე "გადაყოლისთვის"
for (var i=0; i<students.length; i++) {
	var student = students[i]
	chooseSubject(student, subject1)
	chooseSubject(student, subject2)
}


for (student of students) {
	chooseSubject(student, subject1)
	chooseSubject(student, subject2)
}

// იმის მაგივრად, რომ სამი პირობა შევამოწმოთ (რომელთაგან ორის
// შემთხვევაში ერთსა და იმავეს ვაკეთებთ), შეგვიძლია
// ბულის ოპერატორები გამოვიყენოთ.
function chooseSubject(student, subject) {
	var prerequisite = subject.prerequisite
	if (!prerequisite || hasPassed(student, prerequisite)) {
		console.log(student.name + " can choose " + subject.name)
	} else {
		console.log(student.name + " cannot choose " + subject.name)
	}
}














