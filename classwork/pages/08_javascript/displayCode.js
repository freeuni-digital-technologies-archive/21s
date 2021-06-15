function reqListener(){
	let snippets = this.responseText.split('/// ')
	snippets = snippets.filter(e => e.length > 0).map(e => {
		const elemName = e.split('\n')[0]
		const code = e.substr(e.indexOf('\n')+1).replace(/\n*$/, '')
		const preElem = document.createElement('pre')
		code.split('\n').filter(c => c.length > 0).map(c => {	
			const codeElem=document.createElement('code')
			codeElem.innerText=c
			codeElem.className='language-javascript'
			preElem.appendChild(codeElem)
		})
		document.getElementById(elemName).appendChild(preElem)
		
	})
	hljs.highlightAll();
}

const script = document.getElementById('main-script')
const src = script.src

if (!src.includes("file:///")) {
	var head  = document.getElementsByTagName('head')[0];
	var linkElem  = document.createElement('div');
	linkElem.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css" integrity="sha512-kZqGbhf9JTB4bVJ0G8HCkqmaPcRgo88F0dneK30yku5Y/dep7CZfCnNml2Je/sY4lBoqoksXz4PtVXS4GHSUzQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	`


	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", src);
	oReq.send();
	document
		.getElementById("toc")
		.innerHTML = [...document
							.getElementById('exercises')
							.getElementsByClassName('exercise')]
							.map(e => `<li><a href="#${e.id}">${e.id}</a></li>`)
							.join('')
}




