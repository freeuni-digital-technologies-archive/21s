function checkNewMessages() {
	sendRequest('/', loadNewMessages)
}

function sendRequest(route, func) {
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", func);
	oReq.open("GET", "http://127.0.0.1:3000" + route);
	oReq.send();
}

function loadNewMessages() {
	console.log('done')
	console.log(this.responseText)
}
// გაუშვი ახალი მესიჯის შემოწმების ფუნქცია ყოველ 1000 მილიწამში (ერთ წამში)
setInterval(checkNewMessages, 1000)


function reqListener () {
  console.log(this.responseText);
}

