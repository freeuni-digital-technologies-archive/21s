let users = new Database('users')

function register() {
	// წავიკითხოთ შეყვანილი მონაცემები
	let user = getData()
	// შევქმნათ ახალი იუზერი
	// users.create(user)
	// დავამატოთ შემოწმება
	let existingUser = users.get('username', user.username)
	// users.get დააბრუნებს null-ს თუ ვერ მოიძებნა.
	// null შეგვიძლია გამოვიყენოთ როგორც false
	// ანუ თუ არ არსებობს ასეთი მომხმარებელი
	if(!existingUser) {
		user = users.create(user)
	} else {
		alert('user already exists')
	}
}

function getData() {
	return {
		username: document.querySelector('#username').value,
		password: document.querySelector('#password').value
	}
}

// ამ ფუნქციის დასრულება დავალებად
function login() {
	// შევამოწმოთ პაროლი და იუზერი
	let inputedUser = getData()
	// ვიპოვოთ შეყვანილი იუზერნეიმის მქონე იუზერი

	// შევადაროთ ნაპოვნი პაროლი და შეყვანილი პაროლი

	// გადავამისამართოთ სხვა გვერდზე
	window.location.href = './index.html'
}